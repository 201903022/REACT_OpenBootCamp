
import React from 'react';
import PropTypes from 'prop-types';

const Button16 = ({onClick,text}) => {
    return (
        <>
     <button className='custom-btncss butonn2cs' onClick={onClick}>{text}</button>            
        </>
        
    );
};


Button16.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired

};


export default Button16;

