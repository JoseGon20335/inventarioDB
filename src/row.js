import React, { useEffect, useState } from "react";

export default function Row(props) {
    const { titulo } = props;
    const { precio } = props;
    const { id } = props;
    const { cantidad } = props;

    return (
        <li className="card" alt="prueba" key={id} id={id}>

            <h5 className="card-title">{ id + "  -  " + titulo + "  -  " + "  -  " + cantidad + "  -  $" + precio}</h5>
            <button>
                Editar
            </button>
        </li>
      );
}