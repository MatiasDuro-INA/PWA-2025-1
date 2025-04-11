import React, { useState } from 'react'
import { Tarea } from './Tarea'
import { Titulo } from './Titulo'
import { Button } from './Inicio/Button'

export const TodoList = () => {

    // Estado para el input
    const [tarea, setTarea] = useState("")

    // Estado para la lista de tareas
    const [tareas, setTareas] = useState([])
   

    // funcion para agregar una tarea
    const agregarTarea = (e) => {
        e.preventDefault()

        if(tarea.trim() === '') return;

        setTareas([...tareas, tarea])

        setTarea("")

    }

    const eliminarTarea = (idTarea) => {

        // let nuevasTareas = tareas.filter((t, i) => i !== idTarea)
        // setTareas(nuevasTareas)
        setTareas(tareas.filter((t, i) => i !== idTarea))
        
    }


  return (
    <div>
        <Titulo titulo={"Listado de tareas"} />
        <form onSubmit={agregarTarea}>
            <input
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder='Escribi una tarea'
            />
            <Button titulo={"Agregar Tarea"} />
        </form>

        <ul>
            {tareas.map((t, i) => (
                    <Tarea tarea={t} key={i} index={i} eliminarTarea={eliminarTarea}/>
                ))}
        </ul>
    </div>

  )
}
