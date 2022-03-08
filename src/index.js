import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

ReactDOM.render(
  <App/>,
  //<App saludo="Buenas" nombre="Ale" />,
  document.getElementById('root')
)


/* function App(props) {
  return (
    <h1>{props.saludo}, {props.saludo}</h1>
  );
} */

/* function withWhatever(WarppedComponent){
  return function ComponenteDeverdad(props){
    return (
      <React.Fragment>
        <WarppedComponent {...props}/>
        <p>Estamos acompañando al wrappedComponent</p>
      </React.Fragment>
    );
  }
} */

/* function withSaludo(WrappedComponent) { 
  return function WarppedComponentWithSaludo (saludo){
    return function ComponenteDeverdad(props){
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando al wrappedComponent</p>
        </React.Fragment>
      );
  }
 }
} */

//const AppwithWhatever = withWhatever(App);
//const AppwithWhatever = withSaludo(App)('Buenas');



/* ReactDOM.render(
  <AppwithWhatever nombre="Ale"/>,
  //<App saludo="Buenas" nombre="Ale" />,
  document.getElementById('root')
) */