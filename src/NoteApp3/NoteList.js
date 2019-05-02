import React from 'react';
import Note from './Note';

const NoteList = ({ notes, remove }) => {
  return (
    <ul>
      {notes.map(({ title, body }) => (
        <Note key={title} title={title} body={body} remove={remove} />
      ))}
    </ul>
  );
};

export { NoteList as default };
