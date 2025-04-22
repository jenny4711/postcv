import { NoteIcon } from "../icons/Note"
import { SendIcon } from "../icons/Send"
import { SearchIcon } from "../icons/Search"
import HomeIcon from "../icons/HomeIcon"
import NotificationIcon from "../icons/NotificationIcon"
import Link from "next/link"
import BookmarkIcon2 from '@/icons/BookmarkIcon2'
import PlusIcon from '@/icons/PlusIcon'
const items = [
  {
    title: "home",
    url: "/#",
    icon: HomeIcon,
  },
  {
    title: "search",
    url: "/#",
    icon: SearchIcon,
  },
  {
    title: "notifications",
    url: "/#",
    icon: NotificationIcon,
  },
  
  {
    title: "replies",
    url: "/#",
    icon: SendIcon,
  },
  // {
  //   title: "following",
  //   url: "/#",
  //   icon: FeedIcon,
  // },
  {
    title: "sites",
    url: "/#",
    icon: BookmarkIcon2,
  },
  {
    title: "create",
    url: "/#",
    icon: PlusIcon,
  },
]




export default function AppSideBar() {
  return (
    <div className="hidden sm:flex w-[280px]  justify-end ">
      <div className="flex flex-col width-[60px]  items-center px-[11px] gap-6  pt-[12px] ">
        {items.map((item) => (
          <Link className=" flex w-[36px] h-[36px] items-center justify-center  " key={item.title} href={item.url}>
            <item.icon />
          </Link>
        ))}
      </div>
    </div>
  );
}