import React, { useContext } from "react";
import contextValue from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(contextValue);
  const { notes, addNote } = context;

  return (
    <>
      <AddNote />

      <div className="row my-3">
        <h1>Your Note</h1>
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
};

export default Notes;
