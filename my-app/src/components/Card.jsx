import { useState } from "react"
import "./Card.css"

function Card({visible, onClick, content}){

    return(
        <>
            <div className={visible ? "container-flip" : "container-hidden"}
                onClick={onClick} /*left is function, right is props*/>
                {visible? <h2>{content}</h2>: <h2></h2>}
            </div>
        </>
    )

    
}


export default Card