import React, { useState } from 'react'
import { Tarea } from './Tarea'
import { Titulo } from './Titulo'
import { Button } from './Inicio/Button'
import { useTodoList } from '../hooks/useTodoList'

export const TodoList = () => {

    const {agregarTarea, eliminarTarea, setTarea, tarea, tareas} = useTodoList()
    

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
