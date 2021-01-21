import React from "react";
import NoteIcon from "@material-ui/icons/Note";
function Header() {
  return (
    <header>
      <h1>
        <NoteIcon style={{ marginRight: "0.5rem" }} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
