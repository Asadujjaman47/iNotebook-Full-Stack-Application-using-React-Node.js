import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // TODO: API Call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBjMjYzMzc5ZmE0NDY4ODc4OWU2In0sImlhdCI6MTY3ODcwNzgzM30.INtih475qvVtn_XikSd1QOR2APfaWRzQ00T2JThXjs8",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBjMjYzMzc5ZmE0NDY4ODc4OWU2In0sImlhdCI6MTY3ODcwNzgzM30.INtih475qvVtn_XikSd1QOR2APfaWRzQ00T2JThXjs8",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    const note = {
      _id: "640f0ca0503e19c36a32f196",
      user: "640f0c263379fa44688789e6",
      title,
      description,
      tag,
      date: "2023-03-13T11:44:32.114Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBjMjYzMzc5ZmE0NDY4ODc4OWU2In0sImlhdCI6MTY3ODcwNzgzM30.INtih475qvVtn_XikSd1QOR2APfaWRzQ00T2JThXjs8",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleteting the note note with id" + id);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBjMjYzMzc5ZmE0NDY4ODc4OWU2In0sImlhdCI6MTY3ODcwNzgzM30.INtih475qvVtn_XikSd1QOR2APfaWRzQ00T2JThXjs8",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id == id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
