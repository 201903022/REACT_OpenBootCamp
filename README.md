# REACT_OpenBootCamp


# Extensiones instaladas para esta sesion: 
<details>

<summary> See </summary>

> Babel JavaScript: Dar color a codigo de JavaScript. 

> Better Comments: Dar color a comentarios de codigo. 

> Bracket Pair Visualizar donde abren y donde cierran cada parentensis. 

> Debugger for Java

> ES7 React/Redux/GraphQL/React-Native snippets: Snippet para hacer mas rapida la escritura. 

> ES7+ React/Redux/React-Native snippets

> ESLint Controlar las reglas si se aplican a nuestro codigo. Como en Package Json.

> Image Preview:Visualizar todas la referencias ruta de imagenes de lado derecho donde se encuentras los numeros del IDE: VSCODE

> JavaScript (ES6) code snippets

> JS JSX Snippets

> npm Intellisense: Completar de manera rapida los paquetes que se estaran utilizando. __reuire('');

> Path Intellisense: Autocomplet

> Version Lens

</details>

To ignore, add // eslint-disable-next-line to the line before.

# Better Comments:

/**
    * MyMethod
    * * Important
    * ! Rojo
    * ? Should this methos be exposed in the public API? 
    * TODO: refactor this method so that it conforms to the API
    * @param myParam T
*/ 

# Dudas 
onclick={buscar} o onClick={() => buscar()}


# Hooks
Funciones incorporadas para simplificar o especificar mecanismos para trabajar con funcionales.

# props.children


```
const Example4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de CHILDREN PROPS</h1>
            <h2> 
                Nombre: {props.nombre}
            </h2>
            {props.children}
        </div>
    );
};
```

```
<Example4 nombre='Martin'>
    <h2>Este es el hijo 1</h2>
    <h3>Este es el hijo 2</h3>
</Example4>
```

Lo que hace props.children es: <br/>
- Crea un nuevo div y lo pone en el div padre <br/>
- Crea un nuevo h1 y lo pone en el div hijo <br/>   
- Crea un nuevo h2 y lo pone en el div hijo <br/>

```        <div>
            <h1>Ejemplo de CHILDREN PROPS</h1>
            <h2> 
                Nombre: {props.nombre}
            </h2>
                <h2>Este es el hijo 1</h2>
                 <h3>Este es el hijo 2</h3>
        </div>
```

# Comandos 
Comando para seleccionar diferentes lineas de codigo: 
```
alt + click 
ctrl + d 
```
