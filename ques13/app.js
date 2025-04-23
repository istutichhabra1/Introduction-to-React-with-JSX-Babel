import React, { useState } from "react";

function App() {
  
  const [title, setTitle] = useState("Initial Title");
  const [reactUpdates, setReactUpdates] = useState(0);


  const [vanillaUpdates, setVanillaUpdates] = useState(0);

  const changeTitleVanilla = () => {
    document.title = "Title changed via Vanilla JS";
    setVanillaUpdates(vanillaUpdates + 1);
  };


  const changeTitleReact = () => {
    setTitle("Title changed via React");
    setReactUpdates(reactUpdates + 1);
  };

  return (
    <div>
      <h1>Virtual DOM vs Traditional DOM</h1>

      <button onClick={changeTitleVanilla}>
        Change Title (Vanilla JS)
      </button>
      <p>Vanilla JS DOM Updates: {vanillaUpdates}</p>

      <button onClick={changeTitleReact}>
        Change Title (React)
      </button>
      <p>React DOM Updates: {reactUpdates}</p>

      <p>Current Title: {title}</p>
    </div>
  );
}

export default App;
