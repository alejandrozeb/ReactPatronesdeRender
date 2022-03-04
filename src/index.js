import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index.js';
import './index.css';
function App(props) {
  return (
    <h1>{props.saludo}, {props.saludo}</h1>
  );
}

function withWhatever(WarppedComponent){
  return function ComponenteDeverdad(props){
    return (
      <React.Fragment>
        <WarppedComponent {...props}/>
        <p>Estamos acompañando al wrappedComponent</p>
      </React.Fragment>
    );
  }
}

const AppwithWhatever = withWhatever(App);


ReactDOM.render(
  <AppwithWhatever saludo="Buenas" nombre="Ale"/>,
  //<App saludo="Buenas" nombre="Ale" />,
  document.getElementById('root')
);
