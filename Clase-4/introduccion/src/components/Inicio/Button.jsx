
import React from "react"
import './Styles.css'

export const Button = ({titulo, color}) => {

  // console.log("Props: ", props);
  // Desestructuracion
  // const {titulo, color} = props
  

  return (
    <>
    <div className="ButtonContainer">
        <button className="Button" style={{color: color}}>{titulo}</button>
    </div>
    </>
  )

}


