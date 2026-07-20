import { useCallback, useEffect, useRef, useState } from "react";
import {
  createSession,
  type DayMetrics,
  type Job,
  type Session,
  type SimConfig,
  type SimEvent,
} from "../../lib/tuesday-sim/engine";

export interface LiveFrame {
  time: number;
  jobs: Job[];
  events: SimEvent[];
  metrics: DayMetrics;
  over: boolean;
  operatorBusyUntil: number;
}

/**
 * Drives a sim session in real time: every animation tick advances the world
 * by `simMinutesPerSecond` of sim time. `autoOperate` plays the role of an
 * always-on dispatcher (used for the old-system panel in the duel — a fair
 * fight, not an abandoned desk). Events are delivered per frame so the UI
 * can turn them into motion and sound.
 */
export function useLiveSession(
  config: SimConfig,
  seed: number,
  simMinutesPerSecond: number,
  running: boolean,
  autoOperate = false,
) {
  const sessionRef = useRef<Session | null>(null);
  const accumulatorRef = useRef(0);
  const lastTickRef = useRef<number | null>(null);
  const [frame, setFrame] = useState<LiveFrame | null>(null);

  if (sessionRef.current === null) {
    sessionRef.current = createSession(config, seed);
  }

  useEffect(() => {
    if (!running) return;
    lastTickRef.current = null;
    const interval = window.setInterval(() => {
      const session = sessionRef.current;
      if (!session) return;
      const now = performance.now();
      const last = lastTickRef.current ?? now;
      lastTickRef.current = now;
      accumulatorRef.current += ((now - last) / 1000) * simMinutesPerSecond;

      const events: SimEvent[] = [];
      let guard = 0;
      while (accumulatorRef.current >= 1 && !session.over && guard < 600) {
        accumulatorRef.current -= 1;
        session.step();
        events.push(...session.events);
        if (autoOperate && session.time >= session.operatorBusyUntil) {
          const oldest = session.jobs.find((j) => j.status === "open");
          if (oldest) session.handleJob(oldest.id);
        }
        guard += 1;
      }

      setFrame({
        time: session.time,
        jobs: [...session.jobs],
        events,
        metrics: { ...session.metrics },
        over: session.over,
        operatorBusyUntil: session.operatorBusyUntil,
      });
    }, 100);
    return () => window.clearInterval(interval);
  }, [running, simMinutesPerSecond, autoOperate]);

  const handle = useCallback((jobId: number) => sessionRef.current?.handleJob(jobId) ?? false, []);

  /** Fast-forward whatever remains of the day (used by "skip to results"). */
  const finishNow = useCallback(() => {
    const session = sessionRef.current;
    if (!session) return;
    while (!session.over) {
      session.step();
      if (autoOperate && session.time >= session.operatorBusyUntil) {
        const oldest = session.jobs.find((j) => j.status === "open");
        if (oldest) session.handleJob(oldest.id);
      }
    }
    setFrame({
      time: session.time,
      jobs: [...session.jobs],
      events: [...session.events],
      metrics: { ...session.metrics },
      over: session.over,
      operatorBusyUntil: session.operatorBusyUntil,
    });
  }, [autoOperate]);

  return { frame, handle, finishNow };
}
