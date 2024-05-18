import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "../card/Card";
import WeatherDescriptionForecast from "./WeatherDescriptionForecast";
import WindIcon from "../wind/WindIcon";
import { ContainerForecast, ContenedorDeFondo } from "../../styled-Components/Components";
import Loader from "../loader/Loader";
import { useGeolocated } from 'react-geolocated';

const WeatherForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
  const [geocoding,setGeocoding]=useState(0)

  const cambiarGeo=useCallback(()=>{
    setGeocoding(geocoding+1);
  });


  // Función para convertir Kelvin a Celsius
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  // Función para obtener el nombre del día de la semana
  const obtenerNombreDiaSemana = (numeroDia) => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[numeroDia];
  };

  useEffect(() => {
    const fetchWeatherData = async () => {  
      try {
            const apiKey = process.env.REACT_APP_API;  //aquí está la string que contiene la apikey
            let apiUrl = '';

            if (geocoding===0 && isGeolocationAvailable && isGeolocationEnabled && coords) {
                apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`;
                console.log("Estoy con geo"+geocoding);                
                cambiarGeo();
            } else if (geocoding!==0 && city!=='') {
                apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
                console.log("Estoy sin geo");
            } else {
                apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=Buenos%20Aires&appid=${apiKey}`;
                console.log("Ciudad por defecto");
            }

            const response = await axios.get(apiUrl);
            setForecastData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    fetchWeatherData();
}, [city, coords, isGeolocationAvailable, isGeolocationEnabled,geocoding]);

  if (!isGeolocationAvailable || !isGeolocationEnabled) {
    return <div>Geolocation is not available or enabled.</div>;
  }

  if (loading) {
    return <div><Loader/></div>;
  }

  if (!forecastData) {
    return <div>Error fetching weather data</div>;
  }

  // Función para calcular la temperatura mínima y máxima de cada día
  const calculateMinMaxTemperatures = (forecasts) => {
    const temperatures = forecasts.map(forecast => forecast.main.temp);
    const minTemp = kelvinToCelsius(Math.min(...temperatures));
    const maxTemp = kelvinToCelsius(Math.max(...temperatures));
    return { minTemp, maxTemp };
  };

  // Agrupar pronósticos por día
  const dailyForecasts = {};
  forecastData.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = [];
    }
    dailyForecasts[date].push(forecast);
  });

  

  return (
    <ContainerForecast>
      <ContenedorDeFondo>
        <div className="contenedorDeCards">
          {Object.keys(dailyForecasts).map((date, index) => {
            // Calcula el porcentaje de probabilidad de lluvia
            const porcentajeDeLluvia = (dailyForecasts[date][0].pop * 100).toFixed(0)
            return (
              <div key={index} className="hover:bg-orange-500 hover:opacity-90 transform hover:translate-y-[-5px]">
                <Card
                  nombreDeldia={obtenerNombreDiaSemana(new Date(date).getDay())}
                  diaNumero={new Date(dailyForecasts[date][0].dt_txt).getDate()}
                  url={<WeatherDescriptionForecast weatherCode={dailyForecasts[date][0].weather[0].id} />}
                  descripcion={dailyForecasts[date][0].weather[0].description}
                  probabilidadLluvia={porcentajeDeLluvia!==0?porcentajeDeLluvia+ "% precip.":""}
                  tempMin={calculateMinMaxTemperatures(dailyForecasts[date]).minTemp.toFixed(0)}
                  tempMax={calculateMinMaxTemperatures(dailyForecasts[date]).maxTemp.toFixed(0)}
                  iconoViento={<WindIcon direccion={dailyForecasts[date][0].wind.deg.toFixed(0)} velocidad={dailyForecasts[date][0].wind.gust.toFixed(0)} />}
                />
              </div>
            );
          })}
        </div>
      </ContenedorDeFondo>
    </ContainerForecast>
  );
};
export default WeatherForecast;
