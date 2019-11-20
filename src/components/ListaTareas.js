import React from 'react';
import {Link} from 'react-router-dom';

function ListaTareas({tarea}){

    //Generamos la funcion para eliminar un producto
    const eliminarTarea = id => {
        console.log('eliminado', id);
    }

    return(
        <li data-categoria={tarea.tipoDesarrollador} className="list-group-item d-flex justify-content-between align-item-center">
            <p>
                {tarea.tipoTarea} {' '}
                <span className="font-weight-bold">${tarea.proyecto}</span>
            </p>
            <div>
                <Link 
                    to = {`/tareas/editar/${tarea.id}`}
                    className="btn btn-success mr-2"
                >
                    Editar
                </Link>

                <button type="button" className="btn btn-danger" onClick={() => eliminarTarea(tarea.id)}>
                    Eliminar &times;
                </button>
            </div>
        </li>
    )
}

export default ListaTareas;