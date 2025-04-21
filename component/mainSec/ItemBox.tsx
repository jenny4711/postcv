
import Image from "next/image";
import { CommentIcon, LikeIcon, RetweetIcon ,MoreIcon} from "@/icons/icons";
import BookmarkIcon from '@/icons/BookmarkIcon';
export default function ItemBox({item,index}:{item:any,index:number}) {
  return (
    // <div key={index} className="  flex flex-row   gap-3 py-[18px]  w-[437px] sm:w-[554px]     hover:bg-gray-50">
    <div key={index} className="  flex flex-row   gap-3   w-[430px] sm:w-[602px] justify-center  border border-gray-100  hover:bg-gray-50">
      <div className="flex flex-row   gap-3 pt-[20px] pb-[16px] pr-[24px] w-[382px] sm:w-[554px]  ">
    <div className="flex-shrink-0 w-[48px] h-[48px] rounded-full ">
      <Image src={item?.avatar} alt="avatar" width={48} height={48} className=" rounded-full" sizes="48px" />
    </div>

    <div className="flex flex-col flex-grow leading-[22px]">
      <div className="flex flex-row items-center gap-1">
        <p className="font-semibold text-gray-500 text-[14px]">{item?.user}</p>
        <p className="text-gray-400 text-[14px] lowercase">@{item?.user}</p>
        <span className="text-gray-400 ">·</span>
        <p className="text-gray-400 text-[14px]">{item?.duration}</p>
      </div>

      <p className="  text-[14px] tracking-normal  text-gray-500 w-[322px] sm:w-[433px]  ">{item?.content}</p>
      {item?.image && (
        <div className="w-[322px] sm:w-[473px] mt-2">
          <Image 
            src={item?.image} 
            alt="content image" 
            width={473} 
            height={266} 
            className="rounded-xl w-full h-auto object-cover" 
          />
        </div>
      )}
      <div className="flex flex-row items-center justify-start gap-10 sm:gap-20  pt-4    overflow-x-hidden">
      <span className="text-gray-500 text-sm flex flex-row gap-1 "> <CommentIcon className="w-6 h-6" /> {item?.comments}</span>
      <span className="text-gray-500 text-sm flex flex-row gap-1 "> <RetweetIcon className="w-6 h-6" /> {item?.retweets} </span>
      <span className="text-gray-500 text-sm flex flex-row gap-1 "> <LikeIcon className="w-6 h-6" /> {item?.likes}</span>
      <span className="text-gray-500 text-sm flex flex-row gap-1 "> <BookmarkIcon className="w-6 h-6" />  </span>
      <span className="text-gray-500 text-sm flex flex-row gap-1 ml-4"> <MoreIcon className="w-6 h-6" />  </span>
     
      </div>
    </div>
    </div>
  </div>
  );
}