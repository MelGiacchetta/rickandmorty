import React, { useLayoutEffect } from 'react';
import personajes from '../rickandmorty.json'
import Personajes from './Personajes'

function Tarjetas(){
    return (
    <div className="container-fluid">
        <div className="row">
       {personajes.map(function(personaje, idx) {
           return (
            //    que de 12 cuadrados me muestra 4
            <div className="col-md-4"> 
               <Personajes key={idx} datosPersonaje= {personaje} />
            </div>
           )
       }
       )}
       </div>
       </div>
    )
    
}
export default Tarjetas