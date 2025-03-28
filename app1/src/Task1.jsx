function Greeting() {
    return (
      <h1>Hello React!</h1>
    )
  }
export default function Gallery(){
    return (
        <>
        <Greeting />
        <img src={"/vite.svg"}
        alt='Vite-Image'></img>
        </>
    )
}