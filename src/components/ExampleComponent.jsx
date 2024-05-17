import React, { useState } from 'react';

const HoverRotateExample = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        transition: 'transform 0.6s', // Agregamos una transición suave
        transform: isHovered ? 'rotate(90deg)' : 'rotate(0deg)', // Aplicamos la rotación según el estado
      }}
      onMouseEnter={() => setIsHovered(true)} // Actualizamos el estado al pasar el mouse sobre el elemento
      onMouseLeave={() => setIsHovered(false)} // Actualizamos el estado al salir del elemento
    >
      Hover over me
    </div>
  );
};

export default HoverRotateExample;