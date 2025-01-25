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
        
        if (onCard2 != -1){
            setTimeout( ()=>{
                toggleOptions(onCard1,onCard2)
                setOncard1(-1)
                setOncard2(-1)
            },1500)
        }
    }, [onCard2])//state動, useEffect會被呼叫

    let toggleOptions = (index1, index2) => {
        var newOption = JSON.parse(JSON.stringify(options)) //deep copy, 把options內的東西stringify然後parse, 傳給newOption
        newOption[index1].visibility = !newOption[index1].visibility //如果本來有顯示內容->隱藏; 如果原本就隱藏->顯示內容

        if (index2 != null){
            newOption[index2].visibility = !newOption[index2].visibility
        }
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