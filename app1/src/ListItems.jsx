import { useState } from "react"

export default function FruitBasket(){
    const [items,setItems]=useState(['Apple','orange','papaya','mango','grapes']);
    function handleDelete(index){
        setItems(items.filter((item,i) => i!==index));
    }
    return(
        <>
            <ol>
                {items.map((item,index) =>(
                <div key={index}>
                    <li>{item}
                    <button type="button" onClick={()=>handleDelete(index)}>Delete</button></li>
                </div>
                )
                )}            
            </ol>
        </>
    )   
}