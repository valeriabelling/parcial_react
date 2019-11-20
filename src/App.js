import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import EditarTarea from './components/EditarTarea';
import Header from './components/Header';
import Tareas from './components/Tareas';
import AgregarTarea from './components/AgregarTarea';

function App() {

  const [tareas, guardarTareas] = useState([])
  const [recargaTareas, guardarRecargaTareas] = useState(true)

  useEffect(() =>{

    if (recargaTareas){
      const consultarApi = async () =>{
        //consultar la api de json server
        const resultado = await axios.get('http://localhost:4000/tareas');
        //console.log(resultado);
        guardarTareas(resultado.data);
      }
      consultarApi();     //llamamos a la funcion creada

      //cambiar a false la recarga de los productos
      guardarRecargaTareas(false)
    }
  }, [recargaTareas])

  return (
    <Router>
      <Header/>
      <main className="container mt-5">
        <Switch>
          <Route exact path= "/tareas" 
            render={() => ( 
              <Tareas 
              tareas={tareas}/>
            )}/>
          <Route exact path= "/nueva-tarea" 
          render={() => (
          <AgregarTarea
          guardarRecargaTareas = {guardarRecargaTareas}
          />
          )}></Route>
          <Route exact path="/tareas/:id" component={Tareas}></Route>
          <Route exact path= "/tareas/editar/:id" component={EditarTarea}></Route>
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;