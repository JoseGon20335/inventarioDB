import React, { useEffect, useState } from "react";
import { db } from '../firebase-config';

export default function Row(props) {
    const { titulo } = props;
    const { precio } = props;
    const { id } = props;
    const { cantidad } = props;

    const handleClick = () => {

        db.collection('inventario').doc(id).set({
            contenido: contenidoS,
            fecha: fecha,
            titulo: tituloS
        })
    }

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{cantidad}</td>
            <td>{"$" + precio}</td>
            <button onClick={handleClick}>Editar</button>
        </tr>
      );
}