import React, { useState, useEffect } from 'react';

const CounterApp = ({ initialCount = 2 }) => {
  const [count, setCount] = useState(initialCount);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('only runs on mount');
  }, []);

  useEffect(() => {
    console.log('effect');
    document.title = count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return (
    <div>
      <p>
        The current {text || 'count'} is {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

export default CounterApp;
