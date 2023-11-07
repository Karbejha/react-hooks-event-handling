import React from "react";

function Tickler() {
  function tickle() {
    console.log('Teheeeee!');
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
