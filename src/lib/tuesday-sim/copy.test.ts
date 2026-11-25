import { describe, expect, test } from "bun:test";
import { getTuesdayCopy } from "./copy";
import { formatClock, INTERVENTION_ORDER } from "./engine";
import { getTuesdayStory } from "./story";

const en = getTuesdayStory("en");
const es = getTuesdayStory("es");

describe("One Tuesday localization", () => {
  test("keeps the same interventions and checklist score bands in both languages", () => {
    expect(en.chapters.map(({ id }) => id)).toEqual(INTERVENTION_ORDER);
    expect(es.chapters.map(({ id }) => id)).toEqual(INTERVENTION_ORDER);
    expect(es.chapters.map(({ body, bodyCompact }) => [body.length, bodyCompact?.length])).toEqual(
      en.chapters.map(({ body, bodyCompact }) => [body.length, bodyCompact?.length]),
    );
    expect(es.statements.length).toBe(en.statements.length);
    expect(es.readouts.map(({ min, max }) => [min, max])).toEqual(
      en.readouts.map(({ min, max }) => [min, max]),
    );
    for (const { headline, body } of es.readouts) {
      expect(headline?.trim()).toBeTruthy();
      expect(body?.trim()).toBeTruthy();
    }
    expect(es.assumptions.length).toBe(en.assumptions.length);
  });

  test("uses singular labels only when exactly one request or call is counted", () => {
    const copy = getTuesdayCopy("es");
    expect([0, 1, 2].map(copy.actThree.handled)).toEqual(["atendidas", "atendida", "atendidas"]);
    expect([
      copy.actThree.forgotten(1), copy.actThree.backlog(1), copy.actThree.angry(1),
    ]).toEqual(["olvidada", "pendiente", "llamada de un cliente enojado"]);
    const one = { dropped: 1, complaints: 1, carried: 1 };
    expect(copy.chrome.counts(one)).toEqual([
      " solicitud quedó olvidada.", " cliente llamó enojado.", " queda para el día siguiente.",
    ]);
    expect(copy.chrome.counts({ dropped: 0, complaints: 2, carried: 0 })).toEqual([
      " solicitudes quedaron olvidadas.", " clientes llamaron enojados.", " quedan para el día siguiente.",
    ]);
    expect(getTuesdayCopy("en").chrome.counts(one)).toEqual([
      " was forgotten.", " customer called angry.", " rolls into tomorrow.",
    ]);
  });

  test("formats the same times and durations for the two locales", () => {
    expect([formatClock(0), formatClock(565)]).toEqual(["8:47 AM", "6:12 PM"]);
    expect([formatClock(0, "es"), formatClock(565, "es")]).toEqual(["08:47", "18:12"]);
    expect(getTuesdayCopy("en").duration(78)).toBe("1h 18m");
    expect(getTuesdayCopy("es").duration(78)).toBe("1 h 18 min");
    expect(getTuesdayCopy("en").hoursShort(90)).toBe("1.5h");
    expect(getTuesdayCopy("es").hoursShort(90)).toBe("1,5 h");
  });
});
