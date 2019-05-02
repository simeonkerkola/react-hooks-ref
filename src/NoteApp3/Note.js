import React, { useEffect } from 'react';

const Note = ({ title, body, remove }) => {
  useEffect(() => {
    return () => {
      console.log('Cleaning up');
    };
  }, []);
  return (
    <li>
      {title} <button onClick={() => remove(title)}>x</button>
      <p>{body}</p>
    </li>
  );
};

export { Note as default };
