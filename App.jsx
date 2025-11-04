import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState(""); 
  const [data, setData] = useState(null);

  function calculateScore(posts, likes, comments, recasts) {
    return (posts * 2) + (likes * 0.5) + (comments * 3) + (recasts * 1.2);
  }

  const handleCheck = () => {
    // Temporary example data (will plug real API later)
    const example = {
      posts: 5,
      likes: 80,
      comments: 10,
      recasts: 12
    };

    setData({ ...example, score: calculateScore(example.posts, example.likes, example.comments, example.recasts) });
  };

  return (
    <div>
      <h1>FOCUS</h1>
      <input placeholder="Enter username..." value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleCheck}>Check</button>

      {data && (
        <div className="card">
          <p>Posts Today: {data.posts}</p>
          <p>Likes: {data.likes}</p>
          <p>Comments: {data.comments}</p>
          <p>Recasts: {data.recasts}</p>
          <h3>Score: {data.score}</h3>
        </div>
      )}
    </div>
  );
}
