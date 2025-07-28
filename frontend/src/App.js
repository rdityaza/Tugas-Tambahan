import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend Webapp</h1>
      <p>Pesan dari backend: {data}</p>
    </div>
  );
}

export default App;
