import React from 'react';
import PropTypes from 'prop-types';
import '../../../Styles/ButtonBlue.css'

const ButtonBlue = ({submit,text='text'}) => {
    return (
        <>
            <div className='login-box'> 
                <form>
                    <a href='#' onClick={submit}>
                        <span></span>   
                        <span></span>   
                        <span></span>
                        <span></span>
                        {text}
                    </a>
                </form>     
            </div>      
        </>
    );
};


ButtonBlue.propTypes = {

};


export default ButtonBlue;
