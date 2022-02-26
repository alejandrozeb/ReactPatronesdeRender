import React from 'react';
import { TodoProvider } from '../TodoContext';
import { TodoItem } from '../TodoItem';
import { AppUI } from './AppUI';

function App(){
  const [state, setState] = React.useState('Estado compartido');
  return (
      <React.Fragment>
        <TodoHeader>
            <TodoCounter/>
            <TodoSearch/>
        </TodoHeader>

        <TodoList>
          <Todoitem state={state}/>
        </TodoList>
      </React.Fragment>
  );
}

function TodoHeader({children}){
  return (
    <header>
        {children}
    </header>
  );
}

function TodoList({children}){
  return (
    <section className="TodoList-container">
      {children}       
    </section>
  );
}

function TodoCounter(){
  return <p>TodoCounter</p>; 
}

function TodoSearch(){
  return <p>TodoSearch</p>;
}

function Todoitem({state}){
  return <p>TodoItem {state}</p>;
}

/* function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
} */

export default App;
