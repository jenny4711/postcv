import {data} from "@/utils/data"

import ItemBox from "./ItemBox"
import { CommentIcon, LikeIcon, RetweetIcon ,MoreIcon} from "@/icons/icons";
import BookmarkIcon from '@/icons/BookmarkIcon';
export default function Highlight() {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-100  w-[430px]  sm:w-[602px] ">
     
      {/* first box - avatar and user duration and context */}
      {data.map((item,index)=>(
        <div className="flex flex-col justify-center items-center border border-gray-100  w-[430px]  sm:w-[602px] ">
     
        <ItemBox key={index} item={item} index={index} />

  <div className="flex flex-row  items-center  pb-[17px] ml-16 w-[322px] sm:w-[493px]   gap-10 sm:gap-21  pt-0   overflow-x-hidden">
      <span className="text-gray-400 text-sm flex flex-row gap-1 "> <CommentIcon className="w-6 h-6" /> {item?.comments}</span>
      <span className="text-gray-400 text-sm flex flex-row gap-1 "> <RetweetIcon className="w-6 h-6" /> </span>
      <span className="text-gray-400 text-sm flex flex-row gap-1 "> <LikeIcon className="w-6 h-6" /> {item?.likes}</span>
      <span className="text-gray-400 text-sm flex flex-row gap-1 "> <BookmarkIcon className="w-6 h-6" />  </span>
      <span className="text-gray-400 text-sm flex flex-row gap-1 "> <MoreIcon className="w-6 h-6" />  </span>
     
      </div>

        </div>
    

      ))}

     
     
    </div>
  );
}