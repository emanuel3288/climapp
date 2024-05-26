import React        from 'react';
//white icons
import ClearWhite        from "../assets/tiempoPresente/Clear.png";
import CloudsWhite       from "../assets/tiempoPresente/Clouds.png";
import OvercastWhite     from "../assets/tiempoPresente/Overcast.png";
import ThunderstormWhite from "../assets/tiempoPresente/Thunderstorm.png";
import DrizzleWhite      from "../assets/tiempoPresente/Drizzle.png";
import RainWhite         from "../assets/tiempoPresente/Rain.png";
import SnowWhite         from "../assets/tiempoPresente/Snow.png";
//black icons
import ClearBlack        from "../assets/card/Clear.png";
import CloudsBlack       from "../assets/card/Clouds.png";
import OvercastBlack     from "../assets/card/Overcast.png";
import ThunderstormBlack from "../assets/card/Thunderstorm.png";
import DrizzleBlack      from "../assets/card/Drizzle.png";
import RainBlack         from "../assets/card/Rain.png";
import SnowBlack         from "../assets/card/Snow.png";

function WeatherDescription({ weatherCode, isCurrent }) {
    const images = {
        800: { white: ClearWhite, black: ClearBlack },
        801: { white: CloudsWhite, black: CloudsBlack },
        802: { white: CloudsWhite, black: CloudsBlack },
        803: { white: CloudsWhite, black: CloudsBlack },
        804: { white: OvercastWhite, black: OvercastBlack },
        200: { white: ThunderstormWhite, black: ThunderstormBlack },
        201: { white: ThunderstormWhite, black: ThunderstormBlack },
        202: { white: ThunderstormWhite, black: ThunderstormBlack },
        300: { white: DrizzleWhite, black: DrizzleBlack },
        301: { white: DrizzleWhite, black: DrizzleBlack },
        302: { white: DrizzleWhite, black: DrizzleBlack },
        500: { white: RainWhite, black: RainBlack },
        501: { white: RainWhite, black: RainBlack },
        502: { white: RainWhite, black: RainBlack },
        600: { white: SnowWhite, black: SnowBlack },
        601: { white: SnowWhite, black: SnowBlack },
        602: { white: SnowWhite, black: SnowBlack },
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

    const { white, black } = images[weatherCode] || {};
    const weatherImage = isCurrent ? white : black;
    const weatherDescription = descriptions[weatherCode] || "Descripción no encontrada";

    return (
        <div className='flex justify-center'>
            <img src={weatherImage} alt={weatherDescription} />
        </div>
    );
}
export default WeatherDescription;