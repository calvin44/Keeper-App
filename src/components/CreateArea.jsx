import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.addItem(title, content);
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
