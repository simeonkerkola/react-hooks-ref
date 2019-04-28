import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [...state, action.note];

    case 'REMOVE_NOTE':
      return state.filter(({ title }) => title !== action.title);

    default:
      return state;
  }
};

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    console.log('storedNotes', storedNotes);

    storedNotes && dispatch({ type: 'POPULATE_NOTES', notes: storedNotes });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const addNote = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', note: { title, body } });
    setTitle('');
    setBody('');
  };

  const remove = title => {
    dispatch({ type: 'REMOVE_NOTE', title });
  };
  return (
    <div>
      <h1>note</h1>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
      <ul>
        {notes.map(({ title, body }) => (
          <Note key={title} title={title} body={body} remove={remove} />
        ))}
      </ul>
    </div>
  );
};

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

export default NoteApp;
