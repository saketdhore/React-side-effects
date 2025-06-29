import { useEffect, useState } from "react";

export default function ProgressBar({ duration, onTimeUp }) {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(onTimeUp, duration);

    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 10) {
          clearInterval(interval);
          return 0;
        }
        return prev - 10;
      });
    }, 10);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onTimeUp]);

  return (
    <progress value={remainingTime} max={duration} />
  );
}
