/* eslint-disable no-undef */
import Drum from "./components/Drum";
import { useState } from "react";
import boom from "./components/sounds/boom.wav";
import clap from "./components/sounds/clap.wav";
import hihat from "./components/sounds/hihat.wav";
import kick from "./components/sounds/kick.wav";
import openhat from "./components/sounds/openhat.wav";
import ride from "./components/sounds/ride.wav";
import snare from "./components/sounds/snare.wav";
import tink from "./components/sounds/tink.wav";
import tom from "./components/sounds/tom.wav";
import "./App.css";


function App(){
  const[sounds,useSounds] = useState([
    {
      name : "boom",
      sound: boom,
      key :"A"
    },
    {
      name : "clap",
      sound: clap,
      key :"S"
    },
    {
      name : "hihat",
      sound: hihat,
      key :"D"
    },
    {
      name : "kick",
      sound: kick,
      key :"F"
    },
    {
      name : "openhat",
      sound: openhat,
      key :"G"
    },
    {
      name : "ride",
      sound: ride,
      key :"H"
    },
    {
      name : "snare",
      sound: snare,
      key :"J"
    },
    {
      name : "tink",
      sound: tink,
      key :"K"
    },
    {
      name : "tom",
      sound: tom,
      key :"L"
    }
  ])


  return (
    <div className="App">
      <h1>Drumkit</h1>
      <div className="drums">
      {sounds.map((sound,i) => (
        <Drum key = {i} letter={sound.key} sound ={sound.sound} />
      ))}
      </div>
    </div>
  )

}
export default App;