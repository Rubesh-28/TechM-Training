import { useState } from "react"

export default function TextField(){
    const [text,setText]=useState('');
    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" name="textbox" onChange={handleChange} value={text}></input>
            <p>{text}</p>
        </>
    )
}