import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './NoteApp';
import NoteApp2 from './NoteApp2';
import CounterApp from './CounterApp';

// ReactDOM.render(<CounterApp initialCount={5} />, document.getElementById('root'));

// ReactDOM.render(<NoteApp />, document.getElementById('root'));
ReactDOM.render(<NoteApp2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
