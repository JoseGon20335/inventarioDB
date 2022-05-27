import React, { useEffect, useState } from "react";
import { db } from '../firebase-config';

export default function cambiarInfo (id, titulo, precio, cantidad, cant_ventas, calificacion, categoria, descripcion, fecha, imagen, marca, nombre) {

    const idR = id;
    const [ tituloR, setTitulo ] = useState(titulo);
    const [ precioR, setprecio ] = useState(precio);
    const [ cantidadR, setcantidad ] = useState(cantidad);
    const [ cant_ventasR, setcant_ventas ] = useState(cant_ventas);
    const [ calificacionR, setcalificacion ] = useState(calificacion);
    const [ categoriaR, setcategoria ] = useState(categoria);
    const [ descripcionR, setdescripcion ] = useState(descripcion);
    const [ fechaR, setfecha ] = useState(fecha);
    const [ imagenR, setimagen ] = useState(imagen);
    const [ marcaR, setmarca ] = useState(marca);
    const [ nombreR, setnombre ] = useState(nombre);

    const readInador = (e) => {

        console.log("entro")

        if(e.target.name === 'titulo'){
            setTitulo(e.target.value)
        } else if(e.target.name === 'calificacion'){
            setcalificacion(e.target.value)
        } else if(e.target.name === 'cant_ventas'){
            setcant_ventas(e.target.value)
        } else if(e.target.name === 'precio'){
            setprecio(e.target.value)
        } else if(e.target.name === 'cantidad'){
            setcantidad(e.target.value)
        } else if(e.target.name === 'categoria'){
            setcategoria(e.target.value)
        } else if(e.target.name === 'descripcion'){
            setdescripcion(e.target.value)
        } else if(e.target.name === 'fecha'){
            setfecha(e.target.value)
        } else if(e.target.name === 'imagen'){
            setimagen(e.target.value)
        } else if(e.target.name === 'marca'){
            setmarca(e.target.value)
        } else if(e.target.name === 'nombre'){
            setnombre(e.target.value)
        }
    
    }

    const handleClick = () => {

        db.collection('inventario').doc(idR).set({
            id: idR,
            titulo: tituloR,
            precio: precioR,
            cantidad: cantidadR,
            cant_ventas: cant_ventasR,
            calificacion: calificacionR,
            categoria: categoriaR,
            descripcion: descripcionR,
            fecha: fechaR,
            imagen: imagenR,
            marca: marcaR,
            nombre: nombreR
        })
    }

    return (
        <div className='preguntaInador'>
                <h3>TITULO</h3>
                <input type="text" name='titulo' onChange={readInador}/>
                <h3>calificacion</h3>
                <input type="text" name='calificacion' onChange={readInador}/>
                <h3>cant_ventas</h3>
                <input type="text" name='cant_ventas' onChange={readInador}/>
                <h3>cantidad</h3>
                <input type="text" name='cantidad' onChange={readInador}/>
                <h3>categoria</h3>
                <input type="text" name='categoria' onChange={readInador}/>
                <h3>descripcion</h3>
                <input type="text" name='descripcion' onChange={readInador}/>
                <h3>fecha</h3>
                <input type="text" name='fecha' onChange={readInador}/>
                <h3>imagen</h3>
                <input type="text" name='imagen' onChange={readInador}/>
                <h3>marca</h3>
                <input type="text" name='marca' onChange={readInador}/>
                <h3>nombre</h3>
                <input type="text" name='nombre' onChange={readInador}/>
                <h3>precio</h3>
                <input type="text" name='precio' onChange={readInador}/>

                <button onClick={handleClick}>Continuar</button>
            </div>
      );
}