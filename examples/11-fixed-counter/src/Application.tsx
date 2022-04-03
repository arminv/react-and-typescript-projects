import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // NOTE: the fix is to just execute this setTimeout, WITHOUT returning it (last example!):
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return <main className="count">{count}</main>;
};

const Application = () => <Counter />;

export default Application;
