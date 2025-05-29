import React from 'react';
import LikeButton from './LikeButton';
import ThemeToggle from './ThemeToggle';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🔁 Props + State Examples</h1>
      <LikeButton initialLikes={5} />
      <ThemeToggle user="Sibu" />
    </div>
  );
}

export default App;
