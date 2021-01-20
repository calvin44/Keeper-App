import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function capitalizeFirst(a) {
    return a[0].toUpperCase() + a.slice(1);
  }

  function addItem(a, b) {
    a = capitalizeFirst(a);
    b = capitalizeFirst(b);
    setNotes((prev) => [
      ...prev,
      {
        title: a,
        content: b
      }
    ]);
  }

  function deleteItem(id) {
    console.log(id);
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          deleteItem={deleteItem}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
