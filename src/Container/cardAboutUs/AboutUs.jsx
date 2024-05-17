import React from "react";
import ema from "../../assets/ema.jpg";
import Slogan from "../../components/aboutUs/Slogan";
import CardAboutUs from "../../components/card/CardAboutUs";

const AboutUs = () => {
    return (
        <div className="bg-gray-900">
            <h2 className="flex pl-2 my-5 font-black text-blue-500 " id="About">About us</h2>
            <hr className="md:border-4 border-gray-400 justify-star"></hr>
            <div id="aboutUs" className="flex pt-1 px-2 bg-gray-800 py-10">
                <Slogan/>
                <CardAboutUs nombre="Emanuel" apellido="Carballal" urlLinkedyn="https://www.linkedin.com/in/emanuel-carballal-b333b179/" urlWhatsapp="https://api.whatsapp.com/send?phone=541122533946" urlGithub="https://github.com/emanuel3288" imageCard={ema} />
            </div>
        </div>
    );
};

export default AboutUs;