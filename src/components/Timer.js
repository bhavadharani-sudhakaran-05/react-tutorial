import { useEffect, useState } from "react";

function Timer() {
  // state
  const [count, setCount] = useState(0);

  //useEffect runs example 1
  useEffect(() => {
  console.log("Screen refreshed");
  checkCount();//main line to call the function
  }, [count]);
  

  //useEffect example 2 "without pressing the btn value changes"
  //useEffect(()=>
  //{
  //console.log("Screen refreshed");
  //setCount(1);
  //dont call any  functions
  //})

  //useEffect example 3 "using callback function setTimeOut"
   //useEffect(()=>{
    //console.log("Refreshed")
    //setTimeout(()=>
    //{
     // setCount((prevState)=> prevState+1);
    //},1000)
   //})


// checking  the count value when it exceed the limit it reset to 
  function checkCount()
  {
    if(count>10)
    {
      setCount(1);
    }
  }
  // event handler
  function updateCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // JSX MUST be returned from component
  return (
    <>
      <h1>I have rendered {count} times</h1>
      <button onClick={updateCount}>Increment count</button>
    </>
  );
}

export default Timer;
