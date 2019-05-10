import React, { useState, useContext } from 'react';
import NotesContext from './context/notes-context';
import useMousePosition from './hooks/useMousePosition';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const position = useMousePosition();

  const addNote = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', note: { title, body } });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>Add note</p>
      <p>
        {position.x} {position.y}
      </p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
