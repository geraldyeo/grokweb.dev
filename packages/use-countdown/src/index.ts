import { useEffect, useRef, useState } from 'react';

type Callback = (diff: number) => void;

export default function useCountdown(
  timeOutInSeconds = 10,
  callback?: Callback
): [number | undefined, () => void] {
  const savedCallback = useRef<Callback>();
  const timeRef = useRef<NodeJS.Timeout>();
  const [startTime, setStartTime] = useState<number>();
  const [counter, setCounter] = useState<number>();
  const [elapsed, setElapsed] = useState<number>(0);

  const resetCountdown = () => {
    setCounter(timeOutInSeconds);
    setElapsed(0);
    setStartTime(Date.now());
  };

  // remember the callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // remember the timeout
  useEffect(() => {
    setCounter(timeOutInSeconds);
  }, [timeOutInSeconds]);

  // update counter
  useEffect(() => {
    setCounter((prev) => {
      let diff = timeOutInSeconds - elapsed;
      if (prev !== diff) {
        // `elapsed` values are rounded off and `diff` may not
        // end nicely at 0, hence lte check and 0 assignment.
        if (diff <= 0) {
          diff = 0;
          setStartTime(undefined);
        }
        if (typeof savedCallback.current === 'function') {
          savedCallback.current(diff);
        }
        return diff;
      }
      return prev;
    });
  }, [elapsed, timeOutInSeconds]);

  // interval that updates `elapsed`
  useEffect(() => {
    if (startTime !== undefined) {
      timeRef.current = setInterval(() => {
        const ms = Date.now() - startTime;
        const elapsedAsSec = Math.floor(ms / 1000);
        setElapsed(elapsedAsSec);
      }, 500);
    }
    return () => timeRef.current && clearInterval(timeRef.current);
  }, [startTime]);

  useEffect(() => {
    setStartTime(Date.now());
    return () => timeRef.current && clearInterval(timeRef.current);
  }, []);

  return [counter, resetCountdown];
}
