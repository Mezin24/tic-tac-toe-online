import { useState, useEffect } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }
    const timer = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => clearInterval(timer);
  }, [enabled, interval]);

  return now;
}

export function useTimer(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const timer = setInterval(() => {
      cb();
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, interval]);
}
