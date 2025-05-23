// ✅ Best practice
import React from "react";


export function WelcomeMessage({ isLoggedIn }) {
  return (
    <div>
      <h1 style={{ color: "#2c3e50", fontSize: "2em" }}>Home Page</h1>
      {isLoggedIn && (
        <p style={{ color: "#16a085", fontSize: "1.2em" }}>
          Welcome back, user!
        </p>
      )}
    </div>
  );
}

export function Test() {
  const isLoggedIn = true;

  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    marginTop: "50px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </div>
  );
}


export default Test;
// export default WelcomeMessage;
