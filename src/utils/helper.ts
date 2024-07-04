export const formatTime = (time: number) => {
  const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 60000) % 60);
  const hours = Math.floor((time / 3600000) % 24);

  return `${hours}:${minutes}:${seconds}.${getMilliseconds}`;
};
