import React, { useState,useRef,useEffect } from 'react';
import PropTypes from 'prop-types';

const Example2 = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef(); 

    // useEffect(() => {
    //     console.log(miRef.current);
    //     miRef.current.focus();
    // }, [contador2]);

    useEffect(()=> { 
        console.log('CAMBIO EN EL COMPONENTE')
        console.log('Mostrando Referencia a elemento DOM: ')
        console.log(miRef)
    } ,[contador])


    return (
        <div>
            <h1>Example 2</h1>
            <h2>Contador: {contador}</h2>
            <h2>Contador2: {contador2}</h2>
            <div> 
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                <button onClick={() => setContador2(contador2 + 1)}>Incrementar</button>            
            </div>
            <h4 ref={miRef}>
              Ejemplo de Elemento Referenciado
            </h4>            
        </div>
    );
};


Example2.propTypes = {

};


export default Example2;
