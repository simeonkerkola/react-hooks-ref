import React, { useState, useEffect } from 'react';

const NoteApp = () => {
  const storedNotes = JSON.parse(localStorage.getItem('notes'));
  const [notes, setNotes] = useState(storedNotes || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });
  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const remove = title => {
    setNotes(notes.filter(notes => notes.title !== title));
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
          <li key={title}>
            {title} <button onClick={() => remove(title)}>x</button>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;
