import { Component } from "react";

class LifeCycle extends Component{ 
        constructor(props){ 
            super(props); 
            console.log('Constructor');
        }

        componentWillUnmount(){ 
            console.log('Antes del montaje del componente')
        }

        componentDidMount(){ 
            console.log('DIDMOUNT: Justo antes del montaje, antes de renderizarlo')
        }
        componentWillReceiveProps(nextProps){ 
            
        }
}