import React from 'react';
import { formatTime } from '../../utils/helper';

interface TimerProps {
  time: number;
}

const Timer: React.FC<TimerProps> = ({ time }) => {
  return (
    <div className="timer">
      <span>{formatTime(time)}</span>
    </div>
  );
};

export default Timer;