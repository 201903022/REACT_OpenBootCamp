import React,{useState} from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css'
// !Importante: Los estilos propios, deben ir debajo del bootsrap para que no los pise; 
// ? import './LoginForm.css'

const RegisterForm = () => {
    const initialData = [ 
        { 
            user: '', 
            name: '', 
            email: '',
            password: '',

        }
    ]
    const [data, setData] = useState(initialData);


    return (
        <div>
            
        </div>
    );
};


RegisterForm.propTypes = {

};


export default RegisterForm;
