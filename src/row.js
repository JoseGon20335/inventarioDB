/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { db } from '../firebase-config';
import PopUp from "./PopUp";

export default function Row(props) {

    const { id } = props;
    const { titulo1 } = props;
    const { precio1 } = props;
    const { cantidad1 } = props;
    const {cant_ventas1} = props;
    const {calificacion1} = props;
    const {categoria1} = props;
    const {descripcion1} = props;
    const {fecha1} = props;
    const {imagen1} = props;
    const {marca1} = props;
    const {nombre1} = props;

    console.log(titulo1)
    console.log(precio1)
    console.log(cantidad1)

    const [ titulo, setTitulo ] = useState(titulo1);
    const [ precio, setprecio ] = useState(precio1);
    const [ cantidad, setcantidad ] = useState(cantidad1);
    const [ cant_ventas, setcant_ventas ] = useState(cant_ventas1);
    const [ calificacion, setcalificacion ] = useState(calificacion1);
    const [ categoria, setcategoria ] = useState(categoria1);
    const [ descripcion, setdescripcion ] = useState(descripcion1);
    const [ fecha, setfecha ] = useState(fecha1);
    const [ imagen, setimagen ] = useState(imagen1);
    const [ marca, setmarca ] = useState(marca1);
    const [ nombre, setnombre ] = useState(nombre1);

    const [pregunta, setPregunta] = useState(false);

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


    const handleClickPopUp = () => {

        db.collection('inventario').doc(id).set({
            id: id,
            titulo: titulo,
            precio: precio,
            cantidad: cantidad,
            cant_ventas: cant_ventas,
            calificacion: calificacion,
            categoria: categoria,
            descripcion: descripcion,
            fecha: fecha,
            imagen: imagen,
            marca: marca,
            nombre: nombre
        })
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{titulo1}</td>
            <td>{cantidad1}</td>
            <td>{"$" + precio1}</td>
            <button className='botonAgregar' onClick={() => setPregunta(true)}>Editar</button>

            <PopUp trigger={pregunta} setTrigger={setPregunta}>
                <div className='preguntaInador'>
                    <div className="grupo1">
                        <div className="grupo2">
                            <h3>TITULO</h3>
                            <input type="text" name='titulo' onChange={readInador}/>
                            <h3>calificacion</h3>
                            <input type="text" name='calificacion' onChange={readInador}/>
                            <h3>cant_ventas</h3>
                            <input type="text" name='cant_ventas' onChange={readInador}/>
                        </div>
                        <div className="grupo2">
                            <h3>cantidad</h3>
                            <input type="text" name='cantidad' onChange={readInador}/>
                            <h3>categoria</h3>
                            <input type="text" name='categoria' onChange={readInador}/>
                            <h3>descripcion</h3>
                            <input type="text" name='descripcion' onChange={readInador}/>
                        </div>
                        <div className="grupo2">
                            <h3>fecha</h3>
                            <input type="text" name='fecha' onChange={readInador}/>
                            <h3>imagen</h3>
                            <input type="text" name='imagen' onChange={readInador}/>
                            <h3>marca</h3>
                            <input type="text" name='marca' onChange={readInador}/>
                        </div>
                        <div className="grupo2">
                            <h3>nombre</h3>
                            <input type="text" name='nombre' onChange={readInador}/>
                            <h3>precio</h3>
                            <input type="text" name='precio' onChange={readInador}/>
                        </div>
                    </div>

                    <button onClick={handleClickPopUp}>Continuar</button>
                </div>
            </PopUp>

        </tr>

      );
}