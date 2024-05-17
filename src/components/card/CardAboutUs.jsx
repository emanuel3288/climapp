import React from "react";
import IconoLinkedyn from "../../assets/iconos/redes/iconoLinkedyn.png";
import IconoGithub from "../../assets/iconos/redes/iconoGithub.png";
import IconoWhatsapp from "../../assets/iconos/redes/iconoWhatsapp.png";
import {ContenedorCardAboutUs,ContenedorTituloAbout
        ,ContenedorSubtituloAbout } from "../../styled-Components/Components";

    
const CardAboutUs=({urlLinkedyn,urlGithub,urlWhatsapp,imageCard,nombre,apellido})=>{
  return (
        <ContenedorCardAboutUs>
            <img src={imageCard} alt="Emanuel" className="w-18 h-18 mb-3 rounded-full md:w-52 md:h-52"/>
            <ContenedorTituloAbout>{nombre+" "+apellido}</ContenedorTituloAbout>
            <ContenedorSubtituloAbout>Fullstack developer</ContenedorSubtituloAbout>
            <div className="hidden md:flex mt-4 space-x-10 pt-10 md:mt-6">
                <a href={urlLinkedyn} target="_self" title="Facebook"><img src={IconoLinkedyn}   width="55" height="55" alt="Linkedyn"/></a>
                <a href={urlGithub}   target="_self" title="Github">  <img src={IconoGithub}     width="55" height="55" alt="Github"/></a>
                <a href={urlWhatsapp} target="_self" title="Whatsapp"><img src={IconoWhatsapp}   width="55" height="55" alt="Whatsapp"/></a>
            </div>
        </ContenedorCardAboutUs>
  )
};
export default CardAboutUs;

