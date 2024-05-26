import React from 'react';
import freshGale          from "../../assets/iconos/Wind/freshGale.png";
import calm               from "../../assets/iconos/Wind/calm.png";
import freshBreeze        from "../../assets/iconos/Wind/freshBreeze.png";
import gentleBreeze       from "../../assets/iconos/Wind/gentleBreeze.png";
import lightAir           from "../../assets/iconos/Wind/lightAir.png";
import lightBreeze        from "../../assets/iconos/Wind/lightBreeze.png";
import moderateBreeze     from "../../assets/iconos/Wind/moderateBreeze.png";
import moderateGale       from "../../assets/iconos/Wind/moderateGale.png";
import strongBreeze       from "../../assets/iconos/Wind/strongBreeze.png";
import strongGale         from "../../assets/iconos/Wind/strongGale.png";
import wholeGale          from "../../assets/iconos/Wind/wholeGale.png";
import storm              from "../../assets/iconos/Wind/storm.png"

const WindIcon = ({ direccion, velocidad,rafagas }) => {
  // Función para obtener el nombre del ícono según la dirección del viento

  // Función para obtener la intensidad del viento
  const getWindIntensity = (velocidad) => {
    // Definir rangos de velocidad y asignar la intensidad correspondiente
    if (velocidad <= 2) {
      return calm;
    } else if (velocidad >= 3 && velocidad < 7) {
      return lightAir;
    } else if (velocidad >= 7 && velocidad < 12) {
      return lightBreeze;
    } else if (velocidad >= 12 && velocidad < 17) {
      return gentleBreeze;
    } else if (velocidad >= 17 && velocidad < 22) {
      return moderateBreeze;
    } else if (velocidad >= 22 && velocidad < 27) {
      return freshBreeze ;
    } else if (velocidad >= 27 && velocidad < 32) {
      return strongBreeze ;
    } else if (velocidad >= 32 && velocidad < 37) {
      return moderateGale;
    } else if (velocidad >= 37 && velocidad < 42) {
      return freshGale ;
    } else if (velocidad >= 42 && velocidad < 47) {
      return strongGale;
    } else if (velocidad >= 47 && velocidad < 53) {
      return wholeGale;
    } else {
      return storm;
    }
  };

  const windRange = (velocidad) => {
    if (velocidad <= 2) {
      return "calma";
    } else if (velocidad >= 3 && velocidad < 7) {
      return "3 - 7 km/h";
    } else if (velocidad >= 7 && velocidad < 12) {
      return "8 - 12 km/h";
    } else if (velocidad >= 12 && velocidad < 17) {
      return "13 - 17 km/h";
    } else if (velocidad >= 17 && velocidad < 22) {
      return "18 - 22 km/h";
    } else if (velocidad >= 22 && velocidad < 27) {
      return "23 - 27 km/h";
    } else if (velocidad >= 27 && velocidad < 32) {
      return "28 - 32 km/h";
    } else if (velocidad >= 32 && velocidad < 37) {
      return "33 - 37 km/h";
    } else if (velocidad >= 37 && velocidad < 42) {
      return "38 - 42 km/h";
    } else if (velocidad >= 42 && velocidad < 47) {
      return "43 - 47 km/h";
    } else if (velocidad >= 47 && velocidad < 53) {
      return "48 - 53 km/h";
    } else {
      return ">53 km/h";
    }
  };



  return (
    <div className='flex flex-col justify-center items-center'>
      <img 
        src={getWindIntensity(velocidad)} 
        alt="Wind Icon"
        style={{ transform: `rotate(${direccion}deg)`, width: '60px', height: '60px' }} // Aplicar el tamaño fijo
      />      
      <p>{windRange(rafagas)}</p>
    </div>
  );
};

export default WindIcon;