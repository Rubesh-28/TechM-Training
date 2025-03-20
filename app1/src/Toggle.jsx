import { useState } from "react"

export default function Toggle(){
    const [color,setColor]=useState('black');
    const [bgcolor,setBgColor]=useState('white');
    function Theme(){
        if (color === 'black' && bgcolor === 'white'){
            setColor('white');
            setBgColor('black');
        }
        else{
            setColor('black');
            setBgColor('white');
        }
    }
    return (
        <>
        <div style={{backgroundColor:bgcolor}}>
        <h1 style={{color:color}}>Hello World!</h1>
        <button onClick={Theme}>Click to toggle theme!</button>
        </div>
        </>
    )
}