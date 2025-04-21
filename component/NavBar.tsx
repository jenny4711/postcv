"use client"

import { useDataContext } from "@/context/DataContext";
export default function NavBar() {
  const {isActive, setIsActive} = useDataContext();
  return (
    <div className="min-h-[60px] px-[24px]  bg-white flex gap-6 border-x border-gray-300  justify-center items-center">
      <span className={`text-[14px] font-semibold ${!isActive ? "text-black" : "text-gray-400"}`} onClick={() => setIsActive(false)}>Highlights</span>
      <span className={`text-[14px] font-semibold ${isActive ? "text-black" : "text-gray-400"}`} onClick={() => setIsActive(true)}>Everyone</span>
    </div>
  );
}