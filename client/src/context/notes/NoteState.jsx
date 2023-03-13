import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "640f0ca0503e19c36a32f196",
      user: "640f0c263379fa44688789e6",
      title: "My Title3",
      description: "Please wake up early2",
      tag: "personal",
      date: "2023-03-13T11:44:32.114Z",
      __v: 0,
    },
    {
      _id: "640f4c3319f019909b243f70",
      user: "640f0c263379fa44688789e6",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-03-13T16:15:47.507Z",
      __v: 0,
    },
    {
      _id: "640f4c3819f019909b243f72",
      user: "640f0c263379fa44688789e6",
      title: "My Title5",
      description: "Please wake up early5",
      tag: "personal5",
      date: "2023-03-13T16:15:52.390Z",
      __v: 0,
    },
    {
      _id: "640f4c3c19f019909b243f74",
      user: "640f0c263379fa44688789e6",
      title: "My Title53",
      description: "Please wake up early53",
      tag: "personal5",
      date: "2023-03-13T16:15:56.394Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call

    console.log("Adding a new note");
    const note = {
      _id: "640f0ca0503e19c36a32f196",
      user: "640f0c263379fa44688789e6",
      title,
      description,
      tag: "personal",
      date: "2023-03-13T11:44:32.114Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {};

  // Edit a Note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
