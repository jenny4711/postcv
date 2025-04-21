import {data} from "@/utils/data"

import ItemBox from "./ItemBox"

export default function Highlight() {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-100 w-[430px]  sm:w-[602px] ">
     
      {/* first box - avatar and user duration and context */}
      {data.map((item,index)=>(
        <ItemBox key={index} item={item} index={index} />
      ))}
     
    </div>
  );
}