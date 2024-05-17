import React from 'react';
import Clear from "../../assets/tiempoPresente/Clear.png";
import Clouds from "../../assets/tiempoPresente/Clouds.png";
import Overcast from "../../assets/tiempoPresente/Overcast.png";
import Thunderstorm from "../../assets/tiempoPresente/Thunderstorm.png";
import Drizzle from "../../assets/tiempoPresente/Drizzle.png";
import Rain from "../../assets/tiempoPresente/Rain.png";
import Snow from "../../assets/tiempoPresente/Snow.png";


function WeatherDescriptionPresente({ weatherCode}) {
    const images = {
        800: Clear,
        801: Clouds,
        802: Clouds,
        803: Clouds,
        804: Overcast,
        200: Thunderstorm,
        201: Thunderstorm,
        202: Thunderstorm,
        300: Drizzle,
        301: Drizzle,
        302: Drizzle,
        500: Rain,
        501: Rain,
        502: Rain,
        600: Snow,
        601: Snow,
        602: Snow,
    };

    const descriptions = {
        800: "Despejado",
        801: "Nubes",
        802: "Nubes",
        803: "Nubes",
        804: "Nublado",
        200: "Tormenta eléctrica",
        201: "Tormenta eléctrica",
        202: "Tormenta eléctrica",
        300: "Chubasco",
        301: "Chubasco",
        302: "Chubasco",
        500: "Lluvia",
        501: "Lluvia",
        502: "Lluvia",
        600: "Nieve",
        601: "Nieve",
        602: "Nieve",
    };

    const weatherImage = images[weatherCode] || Clear;
    const weatherDescription = descriptions[weatherCode] || "Descripción no encontrada";

    return (
        <div className='flex justify-center'>
            <img src={weatherImage} alt={weatherDescription}/>
        </div>
    );
}

export default WeatherDescriptionPresente;