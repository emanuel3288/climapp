import React, { useState } from "react";
import logo from "../../assets/iconos/CliMAPP.png";
import { ContenedorFormGroup,ContenedorForm,FormGroup } from "../../styled-Components/Components";

const Form = ({ onCitySubmit }) => {
    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función para enviar el formulario y pasa el nombre de la ciudad
        onCitySubmit(nombre);
        // Limpia el campo de entrada estableciendo el estado a una cadena vacía
        setNombre("");
    };

    const handleChange = (event) => {
        setNombre(event.target.value);
    };

    const handleKeyPress = (event) => {
        // Verifica si la tecla presionada es "Enter" (código 13)
        if (event.key === "Enter") {
            handleSubmit(event); // Llama a la función para enviar el formulario
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <ContenedorForm>
                <ContenedorFormGroup>
                    <img src={logo} alt="logo"/>
                    <FormGroup>
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="nombre"
                                name="nombre"
                                className="pt-1 pb-1.5 pr-20 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="El tiempo en ..."
                                required
                                value={nombre}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress} // Escucha el evento keyPress
                            />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-black rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        </div>
                    </FormGroup>
                </ContenedorFormGroup>
            </ContenedorForm>
        </form>
    );
};

export default Form;