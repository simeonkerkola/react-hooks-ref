import React, { useState, useContext } from 'react';
import NotesContext from './context/notes-context';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', note: { title, body } });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
