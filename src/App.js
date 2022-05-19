import React, { Component } from 'react';
import getData from './InventarioData';
import './App.css';

class App extends Component {


  fetchInven(){
    let inventario = getData();
    console.log("fetch")
    inventario.map(object => (
      <div key={object.key}>
        <div>{object.ID}</div>
        <div>{object.ID_categoria}</div>
        <div>{object.ID_marca}</div>
        <div>{object.calificacion}</div>
        <div>{object.cant_ventas}</div>
        <div>{object.cantidad}</div>
        <div>{object.descripcion}</div>
        <div>{object.imagen}</div>
        <div>{object.nombre}</div>
        <div>{object.precio}</div>
      </div>
    ))
  }

  render(){
    let inventario = [{ID:"hola"}];

    const Firedb = (e) => {
      console.log(e);
      inventario = getData();
      console.log("********************************",inventario)
    }
  
    return (
      <div className="App">
        <p>HOLA BUENAS TARDES</p>
        <button onClick={Firedb}>INFO</button>
          <div className='mainContent'>
            {
              <p>{this.fetchInven()}</p>
            }
          </div>
      </div>
    );
  }
  
}

export default App;
