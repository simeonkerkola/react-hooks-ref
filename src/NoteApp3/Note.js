import React, { useContext } from 'react';
import NotesContext from './context/notes-context';
import useMousePosition from './hooks/useMousePosition';

const Note = ({ title, body }) => {
  const { dispatch } = useContext(NotesContext);

  const position = useMousePosition();

  const remove = title => {
    dispatch({ type: 'REMOVE_NOTE', title });
  };
  return (
    <li>
      <p>
        x: {position.x}, y: {position.y}
      </p>
      {title} <button onClick={() => remove(title)}>x</button>
      <p>{body}</p>
    </li>
  );
};

export { Note as default };
