const UserStatus=({isOnline})=>{
 return isOnline ? <p>Online</p>:<p>Offline</p>;
}
const AgeCheck=({age})=>{
  return age >18 ? <p>Adult</p>:<p>Minor</p>;
}
const Loading=({isLoading})=>{
    return isLoading ? <p>Loading...</p>:<p>Content Loaded</p>;
}
const Notification=({message})=>{
    return message ? <p>{message}</p> :<p>No Message</p>

}
const FeedBack=({feedback,type})=>{
    return type === 'positive' ? <p style={{color:'green'}}>{feedback}</p> : <p style={{color:'red'}}>{feedback}</p>
}
export {UserStatus,AgeCheck,Loading,Notification,FeedBack}
