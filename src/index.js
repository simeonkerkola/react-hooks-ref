import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { NoteApp } from './NoteApp';

// const App = ({ initialCount = 2 }) => {
//   const [count, setCount] = useState(initialCount);
//   const [text, setText] = useState('');

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(initialCount);
//   };
//   return (
//     <div>
//       <p>
//         The current {text || 'count'} is {count}
//       </p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>reset</button>
//       <input type="text" value={text} onChange={e => setText(e.target.value)} />
//     </div>
//   );
// };

// ReactDOM.render(<App initialCount={5} />, document.getElementById('root'));

ReactDOM.render(<NoteApp initialCount={5} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
