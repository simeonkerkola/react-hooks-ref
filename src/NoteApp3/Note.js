import React, { useContext } from 'react';
import NotesContext from './context/notes-context';
const Note = ({ title, body }) => {
  const { dispatch } = useContext(NotesContext);

  const remove = title => {
    dispatch({ type: 'REMOVE_NOTE', title });
  };
  return (
    <li>
      {title} <button onClick={() => remove(title)}>x</button>
      <p>{body}</p>
    </li>
  );
};

export { Note as default };
