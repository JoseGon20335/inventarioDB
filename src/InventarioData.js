import { db } from '../firebase-config';
import regeneratorRuntime from "regenerator-runtime";


async function  getData(){

    let data = [];



    let col = db.collection('inventario');
    let datos = await col.get();

    //console.log("data",datos.docs);
    datos.docs.forEach(item=>{data.push(item.data())})
    //console.log("data",data);

    return(data)

}
export default getData;