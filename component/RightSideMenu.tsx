
import { Button } from '@/components/ui/button';
import JobListingItem from './JobListingItem';
import Link from 'next/link';
const jobListings = [
  {
    
    title: 'Software Engineer',
   company:"Squid",
   avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/UO5ZifcJIOzp44XVZKIa/profilePhoto-939b7b78-d33d-4768-828f-17998898d27b.png?_a=DATAdtfiZAA0"
  },
  {
    title: 'Backend and Data Engineer',
   company:"Squid",
   avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/UO5ZifcJIOzp44XVZKIa/profilePhoto-939b7b78-d33d-4768-828f-17998898d27b.png?_a=DATAdtfiZAA0"
  },
  {
    title:"Post your job using Rapha and identify cracked talent w/o reviewing resumes and conducting initial phone screens!",
    company:"Rapha",
    avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/EIbYyHYKQvRCbPRdXIL9/profilePhoto-95227e7b-0711-46f0-9ff2-bc9a322d4444.png?_a=DATAdtfiZAA0"
  },
  {
    title:"Design Director",
    company:"Mouthwash Studio",
    avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/OQ7rqpXIYe7vDxwWW6Yo/profilePhoto-fab8afea-4323-4339-9557-d58e1bad1848.png?_a=DATAdtfiZAA0"
    
  },
  {
    title:"Design Director",
    company:"Mouthwash Studio",
    avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/OQ7rqpXIYe7vDxwWW6Yo/profilePhoto-fab8afea-4323-4339-9557-d58e1bad1848.png?_a=DATAdtfiZAA0"
    
  }
]

export default function RightSideMenu() {
  return (
    <div className=" hidden lg:flex w-[300px]  px-[24px] mt-[1px] flex-col justify-between ">
      {/* top box */}
      <div className="flex w-[252px] bg-white my-[24px] gap-3 flex-col">

       <div className="w-[252px]  flex items-start flex-col">
        <p className="text-[14px] ">Posts</p>
        <p className="text-gray-400 text-[12px] leading-5">A community app by Read.cv </p>
        <div className="flex flex-row gap-2">
          <Link className="text-gray-500 text-[12px]" href="/">About</Link>
          <Link className="text-gray-500 text-[12px]" href="/">Conduct</Link>
          <Link className="text-gray-500 text-[12px]" href="/">Download for iOS</Link>
        </div>
     
       </div>
         <Button className="rounded-3xl font-semibold">Log in with Read.cv</Button>
      </div>


      {/* bottom box */}
      <div className="flex w-[252px] bg-white my-[15px] gap-3 flex-col border border-gray-100 rounded-xl p-2">
        <p className="text-sm text-[12px] text-gray-400">Active job listings</p>
        
        <div className="flex flex-col gap-3 px-2 ">
{jobListings.map((jobListing,index)=>(
  <JobListingItem key={index} jobListing={jobListing} />
))}

{/* buttonBoc */}

<div className="flex  bg-white  flex-row justify-start gap-3 mb-2">
        <Button variant="outline" className="rounded-2xl px-[24px] font-medium text-gray-500 text-[12px] py-0 border-gray-50">See all</Button>
        <Button variant="outline" className="rounded-2xl px-[24px] font-medium text-gray-500 text-[12px] py-0 border-gray-50">Post a job</Button>
      </div>



        </div>
      

      </div>
      
    </div>
  );
}