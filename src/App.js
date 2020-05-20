import React, { useState } from "react";
import Tweet from "./Tweet";
import { isRecordExpression } from "@babel/types";

function App() {
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there", likes: "200k" },
    { name: "John", message: "I am John snow", likes: "350k" },
    { name: "Traversy", message: "I am awesome", likes: "600k" }
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;
