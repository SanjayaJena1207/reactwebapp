import React, { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5134/api/middleware", {
        method: "POST",
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error calling the middleware API");
    }
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={handleClick}>Call Azure Function via Middleware</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
