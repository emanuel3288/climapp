import React, { useState } from "react";
import WeatherCurrent from "../components/weatherCurrent/WeatherCurrent";
import WeatherForecast from "../components/weatherForecast/WeatherForecast";
import Form from "../components/forms/Form";
import AboutUs from "../Container/cardAboutUs/AboutUs";
import Footer from "../components/contactUs/Footer";
import {ContainerHome,ContainerPronosticoHome,TituloHome,ContainerPronostico} from "../styled-Components/Components";
import FormMessage from "../components/forms/FormMessage";

const Home = () => {
  const [currentCity, setCurrentCity] = useState("Buenos aires"); // Establece el valor predeterminado como "New York"
  const apiKey = process.env.REACT_APP_API;
  console.log(apiKey+" HOLA"); // Imprimir el va

  // Función para manejar el envío del nombre de la ciudad desde el formulario
  const handleCitySubmit = (cityName) => {
    setCurrentCity(cityName); // Actualiza el estado con el nombre de la ciudad enviada desde el formulario
  };

  return (
        <ContainerHome>
          {/* Pasa la función handleCitySubmit como prop al componente Form */}
          <Form onCitySubmit={handleCitySubmit}/>
          <WeatherCurrent city={currentCity} />
          
          <ContainerPronosticoHome>
            <TituloHome>Pronóstico extendido a 7 días</TituloHome>
          </ContainerPronosticoHome>
          
          <ContainerPronostico>
            <WeatherForecast city={currentCity} />
          </ContainerPronostico>
          
          {/* Pasa el nombre de la ciudad actual al componente WeatherCurrent */}
          <AboutUs/>
          <FormMessage/>
          <Footer/>
        </ContainerHome>
  );
};

export default Home;

//import tw, { styled } from 'twin.macro'