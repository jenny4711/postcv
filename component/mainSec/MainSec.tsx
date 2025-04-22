"use client"
import EveryOne from "./EveryOne";
import Highlight from "./Highlight";

import { useDataContext } from "@/context/DataContext";
export default function MainSec() {
  console.log(window.innerWidth )
  console.log(window.innerHeight,'height' )
  const {isActive} = useDataContext();
  return (
    <div>
    
      {isActive ? <EveryOne /> : <Highlight />}
    
    </div>
  )
}