import React, { useState, useEffect,useCallback} from 'react';
import axios from 'axios';
import WeatherDescription from './WeatherDescriptionPresente';
import { ContenedorWeatherCurrent, CityNameContainer, CityName, City, LineaHorizontalGrisClaro, LineaHorizontalGrisOscuro,  ContenedorTiempoActual } from '../../styled-Components/Components';
import { useGeolocated } from 'react-geolocated';
import Loader from '../loader/Loader';

const WeatherCurrent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
  
  const [geocoding,setGeocoding]=useState(0)

  const cambiarGeo2=useCallback(()=>{
    setGeocoding(geocoding+1);
  });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let cityToFetch = city || 'Buenos Aires'; // Utiliza la ciudad proporcionada o Buenos Aires como ciudad predeterminada

        if (geocoding===0 && isGeolocationAvailable && isGeolocationEnabled && coords) {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=6177460b81e81f4494a1822af32ebc71&units=metric`);
          setWeatherData(response.data);
          console.log("Estoy con geo en current"+geocoding);
          cambiarGeo2();
        }else if (geocoding>=1 && city!=='') {
          const apiKey = process.env.REACT_APP_API;

          const geocodingResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityToFetch}&limit=1&appid=${apiKey}`);
          const { lat, lon } = geocodingResponse.data[0];
          const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
          console.log("Estoy sin geo en current"+geocoding)
          setWeatherData(currentWeatherResponse.data);
        } 
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [coords, city, isGeolocationAvailable, isGeolocationEnabled]);

  if (!isGeolocationAvailable || !isGeolocationEnabled) {
    return <div>Geolocation is not available or enabled.</div>;
  }

  if (!weatherData) {
    return <div><Loader/></div>;
  }

  

  return (
    <ContenedorWeatherCurrent>
    <CityNameContainer>
      <CityName>
      <City>
          {weatherData.name}
        </City>
      </CityName>
    </CityNameContainer>

    <div className='h-5 bg-[#140905] text-white w-full mb-[10px]'/>
      <ContenedorTiempoActual>
        <h2>Estado actual</h2>
        <WeatherDescription weatherCode={weatherData.weather[0].id} />
        <LineaHorizontalGrisClaro>
          <h2>{weatherData.main.temp.toFixed(1)}°C</h2>
        </LineaHorizontalGrisClaro>
        <LineaHorizontalGrisClaro>
          <h4>{weatherData.weather[0].description}</h4>
        </LineaHorizontalGrisClaro>
        <LineaHorizontalGrisOscuro>
          <h4>Presión: {weatherData.main.pressure} hPa</h4>
        </LineaHorizontalGrisOscuro>
        <LineaHorizontalGrisClaro>
          <h4>Viento: {weatherData.wind.speed.toFixed(0)} km/h</h4>
        </LineaHorizontalGrisClaro>
        <LineaHorizontalGrisOscuro>
          <h4>Humedad: {weatherData.main.humidity.toFixed(0)}%</h4>
        </LineaHorizontalGrisOscuro>
      </ContenedorTiempoActual>
    </ContenedorWeatherCurrent>
  );
};

export default WeatherCurrent;