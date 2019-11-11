import React from 'react';
import './App.css';
import {suma} from './ejemplo';
import Saluda from './components/saluda/Saluda';
import Card from  './components/card/Card'

const arr = [
  {id: 1, name: 'abc'},
  {id: 2, name: 'abc2'}
];

function App() {
  return (
    <div>
      {arr.map( obj => (
        <Saluda key={obj.id} text = {obj.name} color = 'verde'/>
      )
      )}
      <Card cuerpo = "Hola que tal" />
    </div>
  );
}

export default App;
