import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <>
      <RandomNumber />
      <Clock />
      <Counter />
      <ProfilePic userId={1} />
    </>
  );
};

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  return <>Random Number:{randomNumber}<br /></>;
};



const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
  <>
    <button onClick={() => setCount(count + 1)}>Count: {count}</button><br />
    </>
  );
};


const ProfilePic = ({ userId }) => {
    const users = {
        1: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      };      
  const profilePicUrl = users[userId];
  return (
    <>
      Profile Pic:
      <br />
      <img src={profilePicUrl} alt="User Profile" width={500}/>
    </>
  );
};

const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
    <>Current Time:{time.toLocaleTimeString()}</>
);
  };
export default App;