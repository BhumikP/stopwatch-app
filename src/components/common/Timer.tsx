import React from "react";
import { formatTime } from "../../utils/helper";

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  return (
    <div className="text-6xl">
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;