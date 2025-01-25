import { useEffect, useState } from "react"
import Card from "./Card"
import Score from "./Score"
import Timer from "./Timer"

const OPTIONS = [
    {value: 1, visibility: false},
    {value: 2, visibility: false },
    {value: 1, visibility: false },
    {value: 2, visibility: false }]

function Container({score, setScore}){

    const[options, setOptions] = useState(OPTIONS)
    const[onCard1, setOncard1] = useState(-1)   //currently card (user現在在跟幾張牌interact) //-1 = no card
    const[onCard2, setOncard2] = useState(-1) 

    useEffect( ()=> {
        
        if (onCard1 != -1 && onCard2 != -1){
            if(options[onCard1].value == options[onCard2].value){
                alert("matched")
            }else{
                alert("not matched")
            }
            setOncard1(-1)
            setOncard2(-1)
            toggleOptions(onCard1)
            toggleOptions(onCard2)
        }

    }, [onCard1,onCard2])//任意一個state動, useEffect會被呼叫

    let toggleOptions = (index) => {
        var newOption = JSON.parse(JSON.stringify(options)) //deep copy, 把options內的東西stringify然後parse, 傳給newOption
        newOption[index].visibility = !newOption[index].visibility //如果本來有顯示內容->隱藏; 如果原本就隱藏->顯示內容
        setOptions(newOption)
    }

    let flip = (index) => {

        setScore(score+1)
        toggleOptions(index)

        if(onCard1 == -1){
            setOncard1(index)
        }else{
            setOncard2(index) //store index for card2
        }
    }

    return (
        <>
            {options.map((i, index) => 
                <Card
                    key={index}
                    visible={i.visibility} 
                    onClick={() => flip(index)} 
                    content={i.value}
                    enable={true}
                />
            )}
        </>
    )
}

export default Container