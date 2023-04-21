import React from "react";
import PropTypes from "prop-types";

import {useState} from 'react';

const GreetingF = ({ name = "noName", lastName = "noLastName" }) => {
    const [age, setAge] = useState(29);
    const birthday = () => {
        setAge(age + 1);
    }
  return (
    <div>
    <hr/>
      <h1>
        {" "}
        Name: {name} {lastName} from GreetingF
      </h1>
        <h2>Edad: {age}</h2>
        <button onClick={birthday}>Birthday</button>
    <hr/>
    </div>
  );
};

GreetingF.propTypes = {};

export default GreetingF;
