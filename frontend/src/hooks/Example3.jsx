/*
* Ejemplo Hooks: 
*   - useState()
*   - useContext(); 
*   rfc (React Function)
*/


import React , { useState,useContext,useEffect } from 'react';

const miContexto = React.createContext(null)
 const Componente1 = () => {     
    const state = useContext(miContexto); 
    return (
        <div>
            
            <h2> 
                El Token es: {state.token}
            </h2>  
            {/* Pintamoe el componente 2*/}
            {/* <Componente2></Componente2> */}
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto); 

    return (
        <div>
             <h2> 
                La Sesion es: {state.sesion}
             </h2>            
        </div>
    );
}

export default function MiComponenteContexto(){ 
    const estadoInicial = { 
        token : '1234', 
        sesion: 1, 

    }

    ///Creamo el estado de este componente 
    const [sessionData, setSessionData] = useState(estadoInicial);

    function updateSession(token,sesion){
        setSessionData(
            {token: 'JSKQWS', 
            sesion: sessionData.sesion + 1
        }); 
    }

    return ( 
        <miContexto.Provider value={sessionData}>
            <h1>Componente Contexto</h1>
            <Componente1></Componente1>
            <Componente2></Componente2>
            <button onClick={updateSession}>Actualizar</button>
        </miContexto.Provider>
    )

}
