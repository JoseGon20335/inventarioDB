import React, { Component, useState } from 'react';

export default class PatientTable extends Component {
    
const [inventario, setInventario] = useState("");

  GetData(){
    console.log("came here")
    return(
        <div>
        {
          this.state.inventario &&
          this.state.inventario.map((object) => (
            <div>
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
    </div>
    )
  }

  render() {

   return (
       <div className="patient-container">

            {this.GetData()}     

      </div>
   );
 }
}