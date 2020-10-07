import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      {open && children}
      <button onClick={toggle}>{open ? "HIDE" : "SHOW"}</button>
    </>
  );
};

export default Toggle;
