"use client"
import EveryOne from "./EveryOne";
import Highlight from "./Highlight";

import { useDataContext } from "@/context/DataContext";
export default function MainSec() {
  const {isActive} = useDataContext();
  return (
    <div>
    
      {isActive ? <EveryOne /> : <Highlight />}
    
    </div>
  );
}