import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from './context/notes-context';

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

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>note</h1>

      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
};

export default NoteApp;
