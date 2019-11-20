import React, {Fragment} from 'react';
import ListaTareas from './ListaTareas';

function Tareas({tareas}) {
    return (
        <Fragment>
            <h1 className = "text-center">Tareas</h1>
            <ul className="list-group mt-5">
                {tareas.map(tarea => (
                    //damos por implicito al return con los parentesis
                    <ListaTareas
                    key={tarea.id}
                    tarea ={tarea}
                    //en cada iteracion le voy pasando el objeto producto
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Tareas;