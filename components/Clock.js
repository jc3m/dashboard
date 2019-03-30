import { useState, useEffect } from 'react';

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

  return (
    <div className="clock">
      <p>{ts.getTime()}</p>
    </div>
  );
};

export default Clock;
