
import React, { useState, useEffect } from 'react';


function Mousecursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="mousehover">
      <CustomCursor position={cursorPosition} />
    </div>
  );
}

function CustomCursor({ position }) {
  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y }}>
      <div className="cursor-inner"></div>
    </div>
  );
}

export default Mousecursor;
