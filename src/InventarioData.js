import { db } from '../firebase-config';
import regeneratorRuntime from "regenerator-runtime";


async function  getData(){

    let data = [];

    //let ID = [];
    //let ID_categoria = [];
    //let ID_marca = [];
    //let calificacion = [];
    //let cant_ventas = [];
    //let cantidad = [];
    //let descripcion = [];
    //let imagen = [];
    //let nombre = [];
    //let precio = [];

    let col = db.collection('inventario');
    let datos = await col.get();
    /*db.collection('inventario').get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            ID.push(doc.get("ID"))
            ID_categoria.push(doc.get("ID_categoria"))
            ID_marca.push(doc.get("ID_marca"))
            calificacion.push(doc.get("calificacion"))
            cant_ventas.push(doc.get("cant_ventas"))
            cantidad.push(doc.get("cantidad"))
            descripcion.push(doc.get("descripcion"))
            imagen.push(doc.get("imagen"))
            nombre.push(doc.get("nombre"))
            precio.push(doc.get("precio"))
        });

        for(let i=0; i< ID.length; i++){
            let temp = [
                ID[i],
                ID_categoria[i],
                ID_marca[i],
                calificacion[i],
                cant_ventas[i],
                cantidad[i],
                descripcion[i],
                imagen[i],
                nombre[i],
                precio[i]
            ]

            data.push(temp)
        }
        
    });*/

    console.log("data",datos.docs);
    datos.docs.forEach(item=>{data.push(item.data())})
    console.log("data",data);

    return(data)

}
export default getData