import React, {useState, useEffect, Component} from "react";
import getData from './InventarioData';
import Row from "./row";

export default function Lista(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getData().then(res => {
            setProducts(res);
            updateDisplayProducts(res);
        })
      }, [])
    const [displayProducts, updateDisplayProducts] = useState([...products]);
    
    function setRows() {
        const row = [];
        for (let i = 0; i < displayProducts.length; i += 1) {
            const id = displayProducts[i].ID;
            const titulo = displayProducts[i].nombre;
            const precio = displayProducts[i].precio;
            const cantidad = displayProducts[i].cantidad;
            row.push(
            <Row id={id} titulo={titulo} precio={precio} cantidad={cantidad}/>
          );
        }
        return row;
    }

    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad Disponible</th>
            </tr>
            {setRows()}
            
        </table>
    );


}

