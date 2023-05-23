import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../../Styles/LoginForm.css'


const LoginForm = () => {
    const initialDat = [
        { 
            user: '', 
            password:'', 
        }
    ]

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [data, setData] = useState(initialDat);
    const submit = () => { 
        console.log(`userName: ${userName} PassWord: ${passWord}`)
        setData([
            ...data,
            {
                user: userName,
                password: passWord
            }
        ])
    }

    const addUserName = (e) => { 
        setUserName(e.target.value)
    }

    const setPass = (e) => { 
        setPassWord(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div>
            <div className='login-box'> 
                <h2>Login Page</h2>
                <form>
                    <div className='user-box'>
                        <input type='text' name='' required='' onChange={addUserName}/>
                        <label>Username</label>
                    </div>
                    <div className='user-box'>
                        <input type='password' name='' required='' onChange={setPass} />
                        <label>Password</label>
                    </div>
                    <a href='#' onClick={submit}>
                        <span></span>   
                        <span></span>   
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            
            </div>
        </div>
    );
};


LoginForm.propTypes = {

};


export default LoginForm;
