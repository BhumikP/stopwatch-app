import React, { useEffect, useState } from "react";

import { formatTime } from "../utils/helper";

import Timer from "../components/common/Timer";
import Button from "../components/common/Button";

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [stoppedTimes, setStoppedTimes] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && !isPaused) {
      // Start the interval to update the time every 10 milliseconds
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setStoppedTimes([]);
  };

  const handleStop = () => {
    setIsActive(false);
    setStoppedTimes([time, ...stoppedTimes]);
    setTime(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <div className="control-buttons">
        {isActive ? (
          <Button
            onclick={handlePauseResume}
            label={isPaused ? "Resume" : "Pause"}
          />
        ) : (
          <Button onclick={handleStart} label="Start" />
        )}
        <Button onclick={handleStop} label="Stop" />
        <Button onclick={handleReset} label="Reset" />
      </div>
      {stoppedTimes?.map((time: number) => (
        <div key={time}>{formatTime(time)}</div>
      ))}
    </div>
  );
};

export default StopWatch;
