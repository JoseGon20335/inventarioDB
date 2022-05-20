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

  async hola(){

    console.log("entro a hola")

    let inventario = await getData();

    console.log("inventario",inventario)

    console.log("inventario2",inventario.length)
    
    
  }
  componentDidMount() {this.hola()}    
  render(){

    return (
      <div className="App">
        <p>HOLA BUENAS TARDES</p>
          <div className='mainContent'>
            
          </div>
      </div>
    );
  }
  
}

export default App;
