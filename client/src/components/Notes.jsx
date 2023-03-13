import React, { useContext } from "react";
import contextValue from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(contextValue);
  const { notes, setNotes } = context;

  return (
    <div className="row my-3">
      <h1>Your Note</h1>
      {notes.map((note) => {
        return <Noteitem note={note} key={note._id} />;
      })}
    </div>
  );
};

export default Notes;
