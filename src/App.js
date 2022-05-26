import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lista from "./Lista";
//import React, { Component } from 'react';
import * as React from 'react';
import { Component } from 'react';
import getData from './InventarioData';
import './App.css';

class App extends Component {

  async hola(){

    console.log("entro a hola")

    let inventario = await getData();
    let a = inventario[0];
    console.log("prueba: ", inventario[0])
    console.log("prueba 2: ", a.nombre)

    console.log("inventario",inventario)

    console.log("inventario2",inventario.length)
    

    for(var i = 0; i < inventario.length; i++)
    {
      console.log(" - funciona: ", inventario[i].nombre)
    }

    return inventario
    
  }
  componentDidMount() {this.hola()}    
  
  render(){
    return (
      <div className="App">
        
        <h2>Inventario</h2>
          <Lista/>
      </div>
    );
  }
  
}

export default App;
