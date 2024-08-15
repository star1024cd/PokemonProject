import React from "react";

function Status(props) {
  return (
    <div>
      <p>{props.count > 10 ? "High count!" : "Keep counting..."}</p>
    </div>
  );
}

export default Status;
