import { useState } from "react";

function TodayDate(){
    const date=Date()
    return (
        <>
        <p>{date}</p>
        </>
    )
}
function Quotes(){
    const quote=[
        "We cannot solve problems with the kind of thinking we employed when we came up with them — Albert Einstein",
"Learn as if you will live forever, live like you will die tomorrow —Mahatma Gandhi",
"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too —Mark Twain",
"When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out —Eleanor Roosevelt",
"When you change your thoughts, remember to also change your world.” —Norman Vincent Peale"
]
const [item,setItem]=useState('');
const quoteChange=()=>{
    setItem(quote[Math.floor(Math.random()*quote.length)]);
}
return (
    <>
        <p>{item}</p>
        <button onClick={quoteChange}>Change Quote</button>
    </>
)
}

function MathResult() {
  const num1 = 10;
  const num2 = 15;
  const result = num1 + num2;

  return <p>{num1} + {num2} = {result}</p>;
}

function WordCount() {
  const paragraph = "React is a JavaScript library for building user interfaces.";
  const wordCount = paragraph.split(" ").length;

  return (
    <>
      <p>{paragraph}</p>
      <p>Word Count: {wordCount}</p>
    </>
  );
}


function MultiplyNumbers() {
  const num1 = 8;
  const num2 = 7;
  const product = num1 * num2;

  return <p>{num1} x {num2} = {product}</p>;
}



export {TodayDate,MathResult,MultiplyNumbers,WordCount,Quotes}