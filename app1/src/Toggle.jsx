import React, { useState } from 'react';

function Toggle() {
  const [color, setColor] = useState('black');
  const [isToggled, setIsToggled] = useState(false);

  const Theme = () => {
    if (color === 'black') {
      setColor('white');
      document.documentElement.style.backgroundColor = 'black';
    } else {
      setColor('black');
      document.documentElement.style.backgroundColor = 'white';
    }
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div>
      <h1 style={{ color: color }}>Hello World!</h1>
      <button onClick={Theme}>Click to toggle theme!</button>
      <br />
      <p>Toggle is {isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default Toggle;