import React,{ useRef } from "react";
import { ContenedorDeFormulario,ContenedorFirstAndLastName,ContenedorTextarea,LabelTextarea,InputTextarea,Boton} from "../../styled-Components/Components"
import LabelAndInput from "./LabelInputFormMessage";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
 
export const FormMessage=()=> {
    const form = useRef();
    //swal para es un alert(ventana/dialogo)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_climapp', 'template_climapp', form.current, {
            publicKey: '_wMS5z3g6oZJTWS9t',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              Swal.fire({
                title: 'Mensaje enviado',
                text: 'Su mensaje a sido enviado con éxito',
                icon: 'success',
                background:'black',
                iconColor:'#ffc031',
                allowEscapeKey:true,
                color:"white",
                timer:3000,
              })
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <div>
            <div className="h-[10vh] w-full bg-gray-800" id="contact"/>
            <div className="w-full bg-gray-800">
                <div className="flex max-w-7xl mx-auto bg-gray-800">
                    <div className="flex flex-col justify-center w-full h-full bg-gray-900 px-2 border-x-2 border-gray-700">
                        <div id="contact" className="flex flex-col pl-5 w-full">
                            <h1 className="flex py-3 text-blue-500 font-bold text-[15.5px] md:text-3xl">Contact</h1>
                            <h2 className="flex py-3 text-lg font-semibold text-blue-300">Formulario de contacto</h2>
                            <hr className="md:border-2 border-gray-400"/>
                        </div>
                        <ContenedorDeFormulario>
                            <form ref={form} onSubmit={sendEmail} className="w-full">
                                <ContenedorFirstAndLastName>
                                    <LabelAndInput name="user_name"  nameLabel="Nombre"    idLabelInput={"first_name"} typeInput="text" placeHolderInput="juan" required/>
                                    <LabelAndInput name="last_name"  nameLabel="Apellido"  idLabelInput={"last_name"} typeInput="text" placeHolderInput="Castro" required/>
                                    <LabelAndInput name="asunto"     nameLabel="Asunto"    idLabelInput={"subjetct"} typeInput="tel" placeHolderInput="asunto..." required/>
                                    <LabelAndInput name="user_email" nameLabel="Correo"    idLabelInput={"email"} typeInput="text" placeHolderInput="johnDoe@gmail.com" required/>
                                </ContenedorFirstAndLastName>
                                <ContenedorTextarea>
                                    <LabelTextarea htmlFor="message">Mensaje</LabelTextarea>
                                    <InputTextarea name="message" id="message" rows="4" placeholder="mensaje..."></InputTextarea>
                                </ContenedorTextarea>
                                <Boton type="submit" value="Send">Enviar</Boton>
                            </form>
                        </ContenedorDeFormulario>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FormMessage;