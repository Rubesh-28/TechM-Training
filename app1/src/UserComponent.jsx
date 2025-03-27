const user={
    name:'Rubesh',
    age:21
}
function Username(){
    return <p>{user.name}</p>
}

export default function Userage(){
    return <p>{user.age}</p>
}
export {Username}