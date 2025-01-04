import { useState } from "react"
import Card from "./Card"
import Score from "./Score"
import Timer from "./Timer"

function Container(props){

    const options = [1,2,3]
    const[visible, setVisible]=useState(false)

    let flip = () => {
        setVisible(!visible)
    }

    return (
        <>
            {options.map((i) => 
                <Card
                    visible={visible} 
                    onClick={flip} 
                    content={i}
                />
            )}
        </>
    )
}
    

export default Container