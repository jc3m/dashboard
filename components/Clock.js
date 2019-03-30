import { useState, useEffect } from 'react';

const twoDigits = (num) => num < 10 ? `0${num}` : num;

const format = (date) => {
  const hours = twoDigits(date.getHours() % 12);
  const minutes = twoDigits(date.getMinutes());
  const seconds = twoDigits(date.getSeconds());
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  return [hours, minutes, seconds, ampm];
}

const Clock = () => {
  const [ts, setTs] = useState(new Date())

  useEffect(() => {
    const i = setInterval(() => {
      setTs(new Date());
    }, 1000);

    return () => {
      clearInterval(i);
    }
  }, []);

  const [ hours, minutes, seconds, ampm ] = format(ts);

  return (
    <div className="clock">
      <h1>{hours}</h1>
      <h2>:</h2>
      <h1>{minutes}</h1>
      <h2>:</h2>
      <h1>{seconds}</h1>
      <h3>{ampm}</h3>
    </div>
  );
};

export default Clock;
