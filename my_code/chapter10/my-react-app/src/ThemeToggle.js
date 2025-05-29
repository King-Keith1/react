// ThemeToggle.js
import React, { useState } from 'react';

function ThemeToggle({ user }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeStyles = {
    backgroundColor: darkMode ? '#333' : '#f9f9f9',
    color: darkMode ? '#fff' : '#000',
    padding: '10px',
    width: '250px',
    border: '1px solid gray',
    marginBottom: '20px'
  };

  return (
    <div style={themeStyles}>
      <h4>{user}'s Theme</h4>
      <p>Current Mode: {darkMode ? '🌙 Dark' : '☀️ Light'}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
