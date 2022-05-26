import React, { useEffect, useState } from "react";

export default function Row(props) {
    const { titulo } = props;
    const { precio } = props;
    const { id } = props;
    const { cantidad } = props;

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{cantidad}</td>
            <td>{"$" + precio}</td>
            <button>Editar</button>
        </tr>
      );
}