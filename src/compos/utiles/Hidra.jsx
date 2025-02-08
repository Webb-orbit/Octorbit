import React, { useState, useEffect} from "react";

function Hidra({catcher}) {
  const [state, setstate] = useState(false);
  const [random, setrandom] = useState("")
  const [passcode, setpasscode] = useState("")

  useEffect(()=>{
    let num = "";
    for (let i = 0; i < 3; i++) {
        num += Math.floor(Math.random() * 10);
    }
    setrandom(num)
    try {
      const data = localStorage.getItem("ultra");
      setstate(JSON.parse(data) ? JSON.parse(data) : false);
    } catch (error) {
      setstate(false);
    }
    return()=>{
      num = ""
    }
  },[])

  useEffect(()=>{
if(passcode == `TN${random * 2}`){
 localStorage.removeItem("ultra");
setstate(false)
}
  },[passcode])
  
  useEffect(()=>{
    try {
      const data = localStorage.getItem("ultra");
      setstate(JSON.parse(data)? JSON.parse(data) : false);
    } catch (error) {
      setstate(false);
    }
  },[catcher])

  return state?(
<div className="bg-neutral-500 fixed top-0 left-0 w-[100%] h-screen text-neutral-200">
      <input
        type="text"
        value={passcode}
        onChange={(e) => setpasscode(e.target.value)}
        className="font-medium w-[90%] p-2 bg-neutral-200 text-[0.9rem] text-black rounded-md"
        placeholder="Enter passcode"
      />
    </div>
  ):null;
}

export default Hidra;
