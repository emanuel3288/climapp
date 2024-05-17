import tw from "twin.macro";
import styled from 'styled-components';

/*--------------------------------------About Us---------------------------dada---*/

export const ContenedorCardAboutUs=styled.div`
${tw`
flex flex-col h-auto w-[40%] items-center px-10 pt-5 pb-6 md:pb-10 bg-gray-700 cursor-pointer border border-gray-500
`}
`;
export const ContenedorTituloAbout=styled.div`
${tw`
mb-1 text-[15.5px] md:text-xl font-black text-white text-center py-2
`}
`;
export const ContenedorSubtituloAbout=styled.div`
${tw`
text-[10px] md:text-[20px] text-gray-500 dark:text-gray-300
`}
`;

/*----------------------------------------------------------------------------*/
/*-------------------------------------Cards-Forecast----------------------------------*/ 
export const ContenedorCard = styled.div`
  ${tw`
    flex flex-col h-full bg-white opacity-70 border border-gray-900 rounded-[20px] items-center pt-[25px] pb-[25px] transition-transform duration-300 ease-out cursor-pointer hover:text-[#000000] sm:w-full
  `}
  &:hover {
    transform: translateX(5px);
    background-color: #ffc04e;
    opacity: 0.99;
  }
`;

export const DatosMeteorologicos=styled.div`
${tw`
flex flex-col justify-center
`}
`;

//-----------------------------------Forecast--------------
export const ContainerForecast=styled.div`
${tw`
flex flex-col w-full 
`}
`;
export const ContenedorDeFondo = styled.div`
  ${tw`
    flex flex-col w-full justify-center bg-[url('https://cdn.canal26.com/media/image/2023/12/28/580437.jpg?s=1&a=360595')] bg-cover bg-repeat bg-center sm:flex sm:flex-col sm:w-full md:flex md:flex-wrap py-3 px-2 
  `}
`;
//--------------------------------------Form--parte superior--------------------------------
export const ContenedorForm=styled.div`
${tw`
flex w-full mx-auto justify-center pb-4 pt-2 bg-[#122061] border-x-slate-900 bg-[url('https://live.staticflickr.com/4066/4429162541_df171a808c_b.jpg')] bg-contain
`} 
`;
export const ContenedorFormGroup=styled.div`
${tw`
flex flex-col justify-center gap-2 
`}
`;
export const FormGroup=styled.div`
${tw`
flex items-center gap-[20px] 
`}
`;

//---------------------------------------------------------------------------
//-----------------page------Home------------------------------------------------
export const ContainerHome=styled.div`
${tw`
flex flex-col max-w-6xl justify-center mx-auto
`}
`;

export const ContainerPronosticoHome=styled.div`
${tw`
bg-black pt-0 h-[50px] 
`}
`;

export const TituloHome=styled.h4`
${tw`
pt-2 mt-0 text-white 
`}
`;

export const ContainerPronostico=styled.div`
${tw`
flex bg-indigo-200 
`}
`;
//----------------------------------------------------------------------------

//------------------------------------weather current----------------------
export const ContenedorWeatherCurrent = styled.div`
  ${tw`
    flex flex-col items-center justify-center bg-auto bg-center bg-repeat cursor-pointer bg-gray-700 pb-5 
  `}
  background-image: linear-gradient(to bottom, #000000, rgba(255, 99, 71, 0.8)), url('https://s.w-x.co/es-escirrus.jpg'); /* Imagen de fondo y gradiente */
  background-size: cover; /* Ajustar tamaño de la imagen */
  background-position: center; /* Posicionar la imagen */

`;
export const ContenedorTiempoActual = styled.div`
  ${tw`
    flex w-[350px] pt-[200px] flex-col border border-gray-500 border-solid rounded-[30px] shadow-md transition-transform duration-300 ease-out text-white bg-[#00054642] sm:w-full sm:p-[5px] md:w-[25%] md:pt-[20px] lg:pt-[40px] lg:pb-[60px]
  `}

  &:hover {
    background: linear-gradient(to bottom, #f1a306, #001b78);
    transform: translateY(10px);
  }
`;
export const CityNameContainer=styled.div`
${tw`
flex flex-col w-full items-center bg-black bg-opacity-50 pt-[13px] pb-[5px] 
`}
`;
export const CityName=styled.div`
${tw`
uppercase
`}
`;
export const City=styled.h1`
${tw`
text-white text-4xl border-red-500
`}
`;

export const LineaHorizontalGrisOscuro=styled.div`
${tw`
bg-[rgba(65, 65, 65, 0.308)] w-full pt-[10px]
`}
`;
export const LineaHorizontalGrisClaro=styled.div`
${tw`
bg-[rgba(172, 172, 172, 0.336)] w-full pt-[10px] 
`}
`;

//-----------------------------------ContenedorDeFondo--------------





//Formulario-!------------------------------------------------------------------------------------------------------------------------------------------------
//components/formMessage/FormMessage.jsx----------------------------------
export const ContenedorDeFormulario=styled.div`
    ${tw`
    flex w-full px-5
    `
    }
`
export const ContenedorFirstAndLastName=styled.div`
    ${tw`
    grid gap-6 mb-6 md:grid-cols-2 mt-5 md:mt-10
    `}
`
//Input and label FormMessage------------------------------------
export const LabelFormMessage=styled.label`
    ${tw`
    flex mb-2 py-0 md:py-4 md:mt-5 text-[15.5px] md:text-xl font-light text-white  
    `}
`
export const InputFormMessage=styled.input`
    ${tw`
    w-full p-2 md:py-4 text-[15.5px] font-extralight bg-gray-700 border-gray-300 border text-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500    
    `}
`
//Textarea del form message
export const ContenedorTextarea=styled.div`
    ${tw`
    
    `}
`
export const LabelTextarea=styled.label`
    ${tw`
    flex mb-2 text-[15.5px] md:text-xl font-light text-white md:py-5 
    `}
` 
export const InputTextarea=styled.textarea`
    ${tw`
    w-full h-24 md:h-56 p-2.5 font-extralight rounded-lg text-lg  text-gray-300 bg-gray-700  border-gray-300 border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700 
    `}
` 

//BOTON SUBMIT--------------------------------------
export const Boton=styled.button`
    ${tw`
    flex my-1 py-1 md:py-3 md:my-3 font-medium rounded-lg text-lg md:text-xl w-full md:w-auto md:px-10 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    `
    }  
`