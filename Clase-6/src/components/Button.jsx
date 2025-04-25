
import React from "react"

export const Button = ({titulo, color, handleClick}) => {

  // console.log("Props: ", props);
  // Desestructuracion
  // const {titulo, color} = props
  

  return (
    <>
    <div className="ButtonContainer" onClick={handleClick}>
        <button className="Button" style={{color: color}}>{titulo}</button>
    </div>
    </>
  )

}


