import React, { useState } from 'react'

export const useTodoList = () => {
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

      return {
        agregarTarea,
        eliminarTarea,
        setTarea, 
        tarea, 
        tareas
      }
  
}
