import { useState } from "react"

export default function Toggle(){
    const [color,setColor]=useState('black');
    function Theme(){
        if (color === 'black'){
            setColor('white');
            document.documentElement.style.backgroundColor = "black"; 
        }
        else{
            setColor('black');
            document.documentElement.style.backgroundColor = "white"; 
        }
    }
    return (
        <>
        <h1 style={{color:color}}>Hello World!</h1>
        <button onClick={Theme}>Click to toggle theme!</button><br />
        </>
    )
}