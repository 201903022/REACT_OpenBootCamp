import { useState } from "react";

import React from "react";
import PropTypes from "prop-types";

const Example1 = () => {
  const person1 = {
    nombre: "hola",
    apellido: "mundo",
    email: "hasjd@gmail.com",
  };

  const [person, setPerson] = useState(person1);
  const updatePerson = (name, lastName) => {
    setPerson({
      nombre: "hola2",
      apellido: "mundo2",
      email: 'holaMundo1@gmail.com'
    });
  };
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h1>Example 1</h1>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <h2>Persona: {person.nombre}</h2>
        <h2>Apellido: {person.apellido}</h2>
        <p>Email: {person.email}</p>
      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
};

Example1.propTypes = {};

export default Example1;
