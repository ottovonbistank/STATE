import React, { useState } from 'react';

const Counter = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
