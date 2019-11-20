import React, {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
//esta es la forma de redireccionar hacia el componente
import {withRouter} from 'react-router-dom';

function AgregarTarea({history, guardarRecargaTareas}) {  //este history es el que redirecciona

    //creamos state que tiene 3 partes y todos inicializan como string vacios
    const [tipoTarea, guardarTipoTarea] = useState('');
    const [proyecto, guardarProyecto] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [nombre, guardarNombre] = useState('');
    const [apellido, guardarApellido] = useState('');
    const [tipoDesarrollador, guardarTipoDesarrollador] = useState('');
    const [error, guardarError] = useState(false);

    const leerValorRadio = e => {
        guardarTipoDesarrollador(e.target.value)
    }

    const agregarTarea = async e => {
        e.preventDefault();
        
        //manejamos el error
        if (tipoTarea === '' || proyecto === '' || fecha === '' || hora === '' || nombre === '' || apellido === '' || tipoDesarrollador === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //crear el nuevo producto
        try {
            const resultado = await axios.post('http://localhost:4000/tareas', {
                tipoTarea,
                proyecto,
                fecha,
                hora,
                nombre,
                apellido,
                tipoDesarrollador
            })

            console.log(resultado);
            if (resultado.status === 201){
                Swal.fire(
                    'Tarea creada!',
                    'La tarea se creo correctamente',
                    'success'
                )
            }
            
        }
        catch (error){
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Oops, Error...',
                text: 'Error, vuelve a intentarlo!'
            })
            
        }

        guardarRecargaTareas(true)
        history.push('/tareas')

    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nueva Tarea</h1>
​            {(error) ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <form className="mt-5" onSubmit={agregarTarea}>
                <div className="form-group">
                    <label>Tipo Tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="tipoTarea" 
                        placeholder="Tipo Tarea"
                        onChange ={e => guardarTipoTarea(e.target.value)}
                    />
                </div>
​
                <div className="form-group">
                    <label>Proyecto</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="proyecto"
                        placeholder="Proyectoo"
                        onChange ={e => guardarProyecto(e.target.value)}
                    />
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">
                        Fecha
                    </label>
                    <div className="col-sm-8 col-lg-4">
                        <input
                        type="date"
                        className="form-control"
                        name="fecha"
                        onChange={e => guardarFecha(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">
                        Hora
                    </label>
                    <div className="col-sm-8 col-lg-4">
                        <input
                        type="time"
                        className="form-control"
                        name="hora"
                        onChange={e => guardarHora(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre"
                        onChange ={e => guardarNombre(e.target.value)}
                    />
                </div>
​
                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="apellido"
                        placeholder="Apellido"
                        onChange ={e => guardarApellido(e.target.value)}
                    />
                </div>
​
                <legend className="text-center">Tipo de Desarrollador:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="tipoDesarrollador"
                            value="Sr"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">
                            Sr
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="tipoDesarrollador"
                            value="Ssr"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">
                            Ssr
                        </label>
                    </div>
    ​
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="tipoDesarrollador"
                            value="Jr"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">
                            Jr
                        </label>
                    </div>
                </div>
​
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Tarea" />
            </form>
        </div>
    )
}

export default withRouter(AgregarTarea);