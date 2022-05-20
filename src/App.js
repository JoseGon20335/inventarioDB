import React, { Component } from 'react';
import getData from './InventarioData';
import './App.css';

class App extends Component {


  // fetchInven(){
  //   let inventario = getData();
  //   let temp = inventario
  //   console.log("fetch")
  //   inventario.map(object => (
  //     console.log(object.ID)
  //   ))
  //   return(temp)
  // }

  hola(){

    console.log("entro a hola")

    let inventario = getData();

    console.log("inventario",inventario)

    console.log("inventario2",inventario.length)
    
    return(
      <div className='allData'>
        {
          <div>hola</div>
            
        }
      </div>
    )
  }

  render(){
  
    return (
      <div className="App">
        <p>HOLA BUENAS TARDES</p>
          <div className='mainContent'>
            {
              <div>{this.hola()}</div>
            }
          </div>
      </div>
    );
  }
  
}

export default App;
