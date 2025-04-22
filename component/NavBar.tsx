"use client"

import { useDataContext } from "@/context/DataContext";
export default function NavBar() {
  const {isActive, setIsActive} = useDataContext();
  return (
    <div className="min-h-[60px] w-[430px]  sm:w-[602px] pl-[3px]     flex gap-6 border-x border-gray-100 justify-center items-center">
      <span className={`  text-[14px] font-semibold ${!isActive ? "text-black" : "text-gray-400"}`} onClick={() => setIsActive(false)}>Highlights</span>
      <span className={`b text-[14px] font-semibold ${isActive ? "text-black" : "text-gray-400"}`} onClick={() => setIsActive(true)}>Everyone</span>
    </div>
  );
}