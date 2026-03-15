import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface TimerProps {
  immediateStart?: boolean;
  hideSeconds?: boolean;
  hideMinutes?: boolean;
  hideHours?: boolean;
}

export interface TimerHandle {
  start: () => void;
  pause: () => void;
  getTime: () => Time;
  getTimeFormatted: () => string;
}

export interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

const Timer = forwardRef<TimerHandle, TimerProps>(
  ({ immediateStart, hideHours, hideMinutes, hideSeconds }, ref) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [time, setTime] = useState<Time>({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });

    const start = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          let { seconds, minutes, hours } = prev;

          seconds++;

          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }

          return { seconds, minutes, hours };
        });
      }, 1000);
    };

    const pause = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    useEffect(() => {
      if (immediateStart) {
        start();
      }
    }, [immediateStart]);

    /*     useEffect(() => {
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, []); */

    useImperativeHandle(ref, () => {
      return {
        start,
        pause,
        getTime: () => time,
        getTimeFormatted: () =>
          formatTime(time, hideHours, hideMinutes, hideSeconds),
      };
    }, [time]);

    return (
      <div>
        <p>{formatTime(time, hideHours, hideMinutes, hideSeconds)}</p>
      </div>
    );
  },
);

export default Timer;

function formatTime(
  time: Time,
  hideHours?: boolean,
  hideMinutes?: boolean,
  hideSeconds?: boolean,
) {
  let formatted = "";
  if (!hideHours) formatted += String(time.hours).padStart(2, "0") + ":";
  if (!hideMinutes) formatted += String(time.minutes).padStart(2, "0") + ":";
  if (!hideSeconds) formatted += String(time.seconds).padStart(2, "0");

  return formatted ?? "-";
}
