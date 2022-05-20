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

    var inventario = getData();

    console.log("inventario",inventario)

    console.log("inventario2",inventario)
    
    return(
      <div className='allData'>
        {
          <div>hola</div>
            
        }
      </div>
    )
  }

  render(){

    // const Firedb = (e) => {
    //   console.log(e);
    //   let inventario = [];

    //   let temp = {
    //     ID: "1",
    //     ID_categoria: "1",
    //     ID_marca : "1",
    //     calificacion : "1",
    //     cant_ventas : "1",
    //     cantidad : "1",
    //     descripcion : "1",
    //     imagen : "1",
    //     nombre : "1",
    //     precio : "1"
    //   }

    //   inventario.push(temp)

      
    //   inventario.push(getData());

    //   console.log(inventario)

    //   inventario.map((objeto) =>
    //     console.log("si entre",objeto)
    //   );

    //   console.log("TU MADRE",inventario)
    // }
  
    return (
      <div className="App">
        <p>HOLA BUENAS TARDES</p>
        {/* <button onClick={Firedb}>iamok</button> */}
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
