import React, { Component, useState } from 'react';
import getData from './InventarioData';
import './App.css';

const App = () => {

  //componentDidMount() {this.hola()}   
  //Id, nombre, cantidad y precio
  // const [resul, setResul] = useState([]);

  // const traerInventario = () => {

  //   let inventario = getData();

  //   console.log("ENTRO", inventario)

  //   data = []

  //   for (let index = 0; index < inventario.length; index++) {

  //     data.push()
      
  //   }

  //   setResul(inventario);
  // }

  return (
    <div className="App">
      <p>HOLA BUENAS TARDES</p>
      <div className='mainContent'>
        {
          getData()
        }
      </div>
    </div>
  );
  
  
}

export default App;
