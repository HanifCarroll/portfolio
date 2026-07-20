import { describe, expect, test } from "bun:test";
import {
  INTERVENTION_ORDER,
  NO_STRESS,
  compareDays,
  configFor,
  runDay,
  type InterventionId,
  type StressConfig,
} from "./engine";
import { TUESDAY_RESULTS, TUESDAY_SEED } from "./story";

const ALL = new Set<InterventionId>(INTERVENTION_ORDER);
const NONE = new Set<InterventionId>();

describe("tuesday-sim engine", () => {
  test("is deterministic: same seed, same day", () => {
    const config = configFor(NONE);
    expect(runDay(config, 7)).toEqual(runDay(config, 7));
    expect(runDay(configFor(ALL), 99)).toEqual(runDay(configFor(ALL), 99));
  });

  test("arrival streams match across configs for the same seed", () => {
    // Acts 1 and 3 promise "the same Tuesday": different system, same demand.
    const before = runDay(configFor(NONE), 42);
    const after = runDay(configFor(ALL), 42);
    expect(after.arrivals).toBe(before.arrivals);
  });

  test("the reader and experience share one canonical result set", () => {
    expect(TUESDAY_RESULTS.before).toEqual(runDay(configFor(NONE), TUESDAY_SEED));
    expect(TUESDAY_RESULTS.after).toEqual(runDay(configFor(ALL), TUESDAY_SEED));
    expect(TUESDAY_RESULTS.after.arrivals).toBe(TUESDAY_RESULTS.before.arrivals);
  });

  test("the old Tuesday is genuinely unwinnable", () => {
    const before = runDay(configFor(NONE), 42);
    expect(before.arrivals).toBeGreaterThan(30);
    // The operator works flat out all day and still can't catch up:
    // jobs are forgotten outright and a pile carries into tomorrow.
    expect(before.manualMinutes).toBeGreaterThan(540);
    expect(before.dropped).toBeGreaterThan(0);
    expect(before.carried).toBeGreaterThan(15);
    expect(before.complaints).toBeGreaterThan(2);
  });

  test("the built system clears the same day with slack", () => {
    const before = runDay(configFor(NONE), 42);
    const after = runDay(configFor(ALL), 42);
    const diff = compareDays(before, after);
    expect(after.dropped).toBe(0);
    expect(after.complaints).toBeLessThan(before.complaints);
    expect(after.avgWaitMinutes).toBeLessThan(before.avgWaitMinutes);
    expect(diff.hoursReclaimed).toBeGreaterThan(5);
  });

  test("each intervention helps on its own", () => {
    const baseline = runDay(configFor(NONE), 42);
    for (const id of INTERVENTION_ORDER) {
      const metrics = runDay(configFor(new Set([id])), 42);
      const helped =
        metrics.dropped < baseline.dropped ||
        metrics.complaints < baseline.complaints ||
        metrics.avgWaitMinutes < baseline.avgWaitMinutes ||
        metrics.manualMinutes < baseline.manualMinutes ||
        metrics.duplicates < baseline.duplicates;
      expect(helped, `intervention ${id} should move at least one metric`).toBe(true);
    }
  });

  test("stress bends the new system but breaks the old one", () => {
    const stress: StressConfig = { loadMultiplier: 2, staffOutage: true, apiDown: true };
    const oldStressed = runDay(configFor(NONE, stress), 42);
    const newStressed = runDay(configFor(ALL, stress), 42);
    const oldNormal = runDay(configFor(NONE, NO_STRESS), 42);

    expect(newStressed.dropped).toBeLessThan(oldStressed.dropped);
    expect(newStressed.completed).toBeGreaterThan(oldStressed.completed);
    // The honest claim: the stressed new system still beats a normal old day.
    expect(newStressed.dropped).toBeLessThanOrEqual(oldNormal.dropped);
  });

  test("every stress moves the new system the honest direction", () => {
    const baseline = runDay(configFor(ALL, NO_STRESS), 42);
    const stresses: StressConfig[] = [
      { loadMultiplier: 2, staffOutage: false, apiDown: false },
      { loadMultiplier: 1, staffOutage: true, apiDown: false },
      { loadMultiplier: 1, staffOutage: false, apiDown: true },
      { loadMultiplier: 2, staffOutage: true, apiDown: true },
    ];
    for (const stress of stresses) {
      const m = runDay(configFor(ALL, stress), 42);
      // Nothing forgotten ever — but the queue must grow, never shrink.
      expect(m.dropped).toBe(0);
      expect(m.carried).toBeGreaterThanOrEqual(baseline.carried);
      expect(m.complaints).toBeGreaterThanOrEqual(baseline.complaints);
    }
  });

  test("an API outage degrades automations but not the record", () => {
    const full = runDay(configFor(ALL, NO_STRESS), 42);
    const outage = runDay(
      configFor(ALL, { loadMultiplier: 1, staffOutage: false, apiDown: true }),
      42,
    );
    expect(outage.manualMinutes).toBeGreaterThan(full.manualMinutes);
    expect(outage.dropped).toBeLessThan(runDay(configFor(NONE), 42).dropped);
  });
});
