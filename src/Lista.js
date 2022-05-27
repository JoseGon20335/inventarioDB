import React, {useState, useEffect} from "react";
import getData from './InventarioData';
import Row from "./row";
import { db } from '../firebase-config';
import PopUp from "./PopUp";

export default function Lista(){

    const [ titulo, setTitulo ] = useState("");
    const [ precio, setprecio ] = useState("");
    const [ cantidad, setcantidad ] = useState("");
    const [ cant_ventas, setcant_ventas ] = useState("");
    const [ calificacion, setcalificacion ] = useState("");
    const [ categoria, setcategoria ] = useState("");
    const [ descripcion, setdescripcion ] = useState("");
    const [ fecha, setfecha ] = useState("");
    const [ imagen, setimagen ] = useState("");
    const [ marca, setmarca ] = useState("");
    const [ nombre, setnombre ] = useState("");

    const [pregunta, setPregunta] = useState(false);
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
    
    function agregar (){

        function guid() {
  
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
          }
        

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

            const id = guid()
    
            db.collection('inventario').doc(id).set({
                ID: id,
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

        return(
            <div>
                <button className='botonAgregar' onClick={() => setPregunta(true)}>agregar</button>
                <PopUp trigger={pregunta} setTrigger={setPregunta}>
                    <div className='preguntaInador'>
                        <div className="grupo1">
                            <div className="grupo2">
                                <h3>Titulo</h3>
                                <input type="text" name='titulo' onChange={readInador}/>
                                <h3>Calificacion</h3>
                                <input type="text" name='calificacion' onChange={readInador}/>
                                <h3>Cant_ventas</h3>
                                <input type="text" name='cant_ventas' onChange={readInador}/>
                            </div>
                            <div className="grupo2">
                                <h3>Cantidad</h3>
                                <input type="text" name='cantidad' onChange={readInador}/>
                                <h3>Categoria</h3>
                                <input type="text" name='categoria' onChange={readInador}/>
                                <h3>Descripcion</h3>
                                <input type="text" name='descripcion' onChange={readInador}/>
                            </div>
                            <div className="grupo2">
                                <h3>Fecha</h3>
                                <input type="text" name='fecha' onChange={readInador}/>
                                <h3>Imagen</h3>
                                <input type="text" name='imagen' onChange={readInador}/>
                                <h3>Marca</h3>
                                <input type="text" name='marca' onChange={readInador}/>
                            </div>
                            <div className="grupo2">
                                <h3>Nombre</h3>
                                <input type="text" name='nombre' onChange={readInador}/>
                                <h3>Precio</h3>
                                <input type="text" name='precio' onChange={readInador}/>
                            </div>
                        </div>

                        <button onClick={handleClickPopUp}>Continuar</button>
                    </div>
                </PopUp>
            </div>
            
        )
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
            {agregar()}
        </table>
    );
}

