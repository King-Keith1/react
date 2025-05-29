// LikeButton.js
import React, { useState } from 'react';

function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <div style={{ border: '1px solid pink', padding: '10px', width: '200px', marginBottom: '20px' }}>
      <p>❤️ Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default LikeButton;
