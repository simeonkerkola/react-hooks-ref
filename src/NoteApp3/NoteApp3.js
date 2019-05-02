import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    console.log('storedNotes', storedNotes);

    storedNotes && dispatch({ type: 'POPULATE_NOTES', notes: storedNotes });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const remove = title => {
    dispatch({ type: 'REMOVE_NOTE', title });
  };
  return (
    <div>
      <h1>note</h1>

      <AddNoteForm dispatch={dispatch} />
      <NoteList notes={notes} remove={remove} />
    </div>
  );
};

export default NoteApp;
