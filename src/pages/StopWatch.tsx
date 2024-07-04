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
    if (stoppedTimes.length > 5) {
      alert("Please reset your stop watch");
      return;
    } else {
      setIsActive(true);
      setIsPaused(false);
    }
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
    <div className="flex flex-col gap-5 relative">
      <Timer time={time} />
      <div className="flex gap-4">
        {isActive ? (
          <Button
            label={isPaused ? "Resume" : "Pause"}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none "
            onclick={handlePauseResume}
          />
        ) : (
          <Button
            label="Start"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none"
            onclick={handleStart}
          />
        )}
        <Button
          label="Stop"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none"
          onclick={handleStop}
          disabled={!isActive}
        />
        <Button
          label="Reset"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
          onclick={handleReset}
        />
      </div>
      <div className="m-auto">
        {stoppedTimes?.map((time: number, index) => (
          <div key={index}>{formatTime(time)}</div>
        ))}
      </div>
    </div>
  );
};

export default StopWatch;
