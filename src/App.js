import React, { Component } from 'react';
import getData from './InventarioData';
import './App.css';

class App extends Component {


  fetchInven(){
    let inventario = getData();
    let temp = inventario
    console.log("fetch")
    inventario.map(object => (
      console.log(object.ID)
    ))
    return(temp)
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
          <div className='mainContent'>
            {
              <div>{this.fetchInven()}</div>
            }
          </div>
      </div>
    );
  }
  
}

export default App;
