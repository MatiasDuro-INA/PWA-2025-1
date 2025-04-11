import React from 'react'

export const Tarea = ({tarea, index, eliminarTarea}) => {


    return (
        <div
            style={{ display: "flex", width: "100", justifyContent: "space-between" }}>
            <li>{tarea}</li>
            <div onClick={() => eliminarTarea(index)}>
                X
            </div>
        </div>
    )
}
