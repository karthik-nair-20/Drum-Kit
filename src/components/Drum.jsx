import { useEffect } from "react";
import "./Drum.css";

function Drum(prop){


  function play()
  {
    new Audio(prop.sound).play();
  }

  useEffect(() =>{
    document.addEventListener("keydown", (e) =>{
      if(e.key.toLowerCase() == prop.letter.toLowerCase())
      {
        play();
      }
    })
  },[]);


  return (
    <div className= "drum" onClick={play}>
      <div className="key">{prop.letter}</div>
      <div className="name">{prop.name}</div>
    </div>
  )

}
export default Drum;