import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from './context/notes-context';

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <ul>
      {notes.map(({ title, body }) => (
        <Note key={title} title={title} body={body} />
      ))}
    </ul>
  );
};

export { NoteList as default };
