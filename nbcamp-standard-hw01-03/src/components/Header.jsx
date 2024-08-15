import React from "react";

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>Welcome to my website!</p>
    </>
  );
}

export default Header;
