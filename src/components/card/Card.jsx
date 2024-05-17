import React from "react";
import { ContenedorCard,DatosMeteorologicos} from "../../styled-Components/Components";

const Card = ({ nombreDeldia, diaNumero, probabilidadLluvia, url, tempMax, tempMin, velViento, iconoViento }) => {
    return (
        <ContenedorCard>
            <div className="pb-3">
                <h4>{nombreDeldia}</h4>
                <h4>{diaNumero}</h4>
            </div>
            <div>
                <h4>{url}</h4>
            </div>
            <DatosMeteorologicos>
                <div>
                    <h5>
                        <span style={{ color: 'red' }}>{tempMax} ºC</span>
                        <span>/</span>
                        <span style={{ color: 'blue' }}>{tempMin} ºC</span>
                    </h5>
                </div>        

                <div className="flex flex-col justify-center"> {/* Utilizamos justify-center para centrar horizontalmente y items-center para centrar verticalmente */}
                    <div> {/* Tamaño fijo para el icono */}
                        <h5>{iconoViento}</h5>
                    </div>
                    <div>
                        <p>{velViento}</p>
                    </div>
                </div>
                <div>
                    <p className="text-blue-400 underline">{probabilidadLluvia}</p>
                </div>
            </DatosMeteorologicos>
        </ContenedorCard>
    );
};

export default Card;