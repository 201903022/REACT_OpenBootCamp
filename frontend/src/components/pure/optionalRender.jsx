import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types'
import Button16 from './Buttons/button16';
import Button6 from './Buttons/button6';
import ButtonBlue from './Buttons/buttonBlue';
import TaskList from '../container/task_list';
//Login LogOut buttons 

const LoginButton = ({onClick}) => { 
    return (
        <button onClick={onClick}>Login</button>
    );
}
LoginButton.propTypes = { 
    onClick: PropTypes.func.isRequired
}

const LogoutButton = ({onClick}) => {
    return (
        <button onClick={onClick}>Logout</button>
    );
}

const clg1 = () => { 
    console.log('Hola Mundo')
}
LogoutButton.propTypes = { 
    onClick: PropTypes.func.isRequired
}
const OptionalRender = () => {
    const [acceso, setAcceso] = useState(false);

    //Unread Messages
    const [nMessage, setNMessage] = useState(0);
    //Unread Messages
    const addMessages = () => { 
        setNMessage(nMessage + 1)
    }
    let optionalButton;

    const loginAction = () => { 
        setAcceso(true);
    }

    const logoutAction = () => {
        setAcceso(false);
    }
    if (acceso) {
        optionalButton = <ButtonBlue submit={logoutAction} text='Log Out'/>;                
    }else{ 
        optionalButton = <ButtonBlue submit={loginAction} text='Log In'/>;
    }
    return (
        <div>
            <h1>Optional Render</h1>
            {optionalButton}
            {/* N Messages unread */}

            {acceso ? 
            <>

                {  nMessage > 0 ? <p> You have {nMessage} unread </p> :
                    <p> You do not have any messages </p>
                }
                <ButtonBlue text='Add Messages' submit={addMessages}/>
                <TaskList/>
            </>:null                 
            }
        </div>
    );
}

export default OptionalRender;
