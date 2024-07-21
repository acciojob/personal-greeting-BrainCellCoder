import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <input onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};

export default App;
