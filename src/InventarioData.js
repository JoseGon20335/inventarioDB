import { db } from '../firebase-config';
import React from 'react';
import regeneratorRuntime from "regenerator-runtime";


const getData = () => {
    
    let data = []
  
    let ID = []
    let nombre = []
    let cantidad = []
    let precio = []
  
    db.collection('eventos')
    .get()
    .then(querySnapshot => {
    querySnapshot.forEach(doc => {
        ID.push(doc.id)
        precio.push(doc.get("precio"))
        nombre.push(doc.get("nombre"))
        cantidad.push(doc.get("cantidad"))
    });

    for(let i=0; i< cantidad.length; i++){
        console.log("ENTRO AL FETCH")
        let temp = [ID[i], nombre[i], cantidad[i], precio[i]]

        console.log("Seteo la nombre")
        data.push(temp)
    }
    });

    console.log(data)
      
    return(
        <div>
            {
                data.map((object) => (
                    <div className='inData' key={object.key}>
                        {
                            <p>{object[0]}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
  }
  export default getData