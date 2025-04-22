import NavBar from "@/component/NavBar";
import MainSec from "@/component/mainSec/MainSec";

export default function Home() {

  return (
    <div className="flex flex-col h-screen w-full bg-[#fff]">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-50">
        <NavBar />
      </div>
      <div className="flex-grow overflow-y-auto hide-scrollbar">
        <MainSec />
      </div>
    </div>
  );
}
