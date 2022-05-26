import React, { Component } from 'react';
import getData from './InventarioData';
import './App.css';

class App extends Component {

  async hola(){

    let inventario = await getData();

    console.log("ENTRO", inventario)

    return(
      <p>hola</p>
      // inventario.map((object) => (
        
      //   <div className='inData' key={object.key}>
      //     {
      //       console.log("----------", object.nombre)
      //     }
      //   </div>
      // ))
    )

    
  }

  componentDidMount() {this.hola()}    
  render(){

    return (
      <div className="App">
        <p>HOLA BUENAS TARDES</p>
        <div className='mainContent'>
          <div>
            <p>hola</p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
