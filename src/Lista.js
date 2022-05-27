import React, {useState, useEffect} from "react";
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
            const cant_ventas = displayProducts[i].cant_ventas;
            const calificacion = displayProducts[i].calificacion;
            const categoria = displayProducts[i].categoria;
            const descripcion = displayProducts[i].descripcion;
            const fecha = displayProducts[i].fecha;
            const imagen = displayProducts[i].imagen;
            const marca = displayProducts[i].marca;
            const nombre = displayProducts[i].nombre;

            console.log(titulo)
            console.log(cantidad)
            console.log(precio)

            row.push(
            <Row id={id} titulo1={titulo} precio1={precio} cantidad1={cantidad} cant_ventas1={cant_ventas} calificacion1={calificacion} categoria1={categoria} descripcion1={descripcion} fecha1 = {fecha} imagen1={imagen} marca1={marca} nombre1={nombre} />
          );
        }
        return row;
    }

    return(
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Cantidad Disponible</th>
                    <th>Precio</th>
                </tr>
                {setRows()}
            </tbody>
        </table>
    );
}

