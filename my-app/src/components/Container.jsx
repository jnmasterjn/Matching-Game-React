import { useState } from "react"
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
    const[onCard, setOncard] = useState([]) //currently card (user現在在跟幾張牌interact)

        // var newOncard = JSON.parse(JSON.stringify(onCard))
        // newOncard.push(index) //存取翻的牌的index
        // setOncard(newOncard)

    let toggleOptions = (index) => {
        var newOption = JSON.parse(JSON.stringify(options)) //deep copy, 把options內的東西stringify然後parse, 傳給newOption
        newOption[index].visibility = !newOption[index].visibility //如果本來有顯示內容->隱藏; 如果原本就隱藏->顯示內容
        setOptions(newOption)
    }

    let flip = (index) => {
        setScore(score+1)
        toggleOptions(index)

    }

    return (
        <>
            {options.map((i, index) => 
                <Card
                    key={index}
                    visible={i.visibility} 
                    onClick={() => flip(index)} 
                    content={i.value}
                />
            )}
        </>
    )
}

export default Container