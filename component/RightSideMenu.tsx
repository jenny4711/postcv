import { Button } from '@/components/ui/button';
import JobListingItem from './JobListingItem';
import Link from 'next/link';
const jobListings = [
  {
    
    title: 'Backend and Data Engineer',
   company:"Squid",
   avartar:"https://res.cloudinary.com/read-cv/image/upload/c_fill,h_48,w_48/dpr_1.0/v1/1/teams/UO5ZifcJIOzp44XVZKIa/profilePhoto-939b7b78-d33d-4768-828f-17998898d27b.png?_a=DATAdtfiZAA0"
  },
  {
    title: 'IOS Enginner',
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
    <div className="flex w-full  h-screen px-6  flex-col justify-between  ">
      {/* top box */}
      <div className="flex w-full bg-white my-[24px] gap-3 flex-col ml-0.5  ">
        <div className="w-full flex items-start flex-col">
          <p className="text-[14px]">Posts</p>
          <p className="text-[#999999] text-[12px] leading-5 pb-0.5">A community app by Read.cv </p>
          <div className="flex flex-row gap-2">
            <Link className="text-[#555555] text-[12px] hover:underline " href="#">About</Link>
            <Link className="text-[#555555] text-[12px] hover:underline" href="#">Conduct</Link>
            <Link className="text-[#555555] text-[12px] hover:underline" href="#">Download for iOS</Link>
          </div>
        </div>
        <Button className="rounded-3xl font-semibold bg-[#111111] text-[#ffffff] ">Log in with Read.cv</Button>
      </div>

      {/* bottom box */}
      <div className="flex w-full  my-[15px] gap-3 flex-col border border-gray-100 rounded-xl mb-7 ml-1.5 ">
      <p className="text-sm text-[12px] text-[#999999] ml-2 ">Active job listings</p>
        
        <div className="flex  flex-col mb-2 ">

          {jobListings.map((jobListing, index) => (
            <div className= "mb-2   ">
            <JobListingItem key={index} jobListing={jobListing} />
            </div>
          ))}

          {/* buttonBox */}
          <div className="flex  flex-row justify-center  p-2 ">
            <Button variant="outline" className="rounded-2xl w-[109px] px[12px]  font-medium text-[#111111] text-[12px] py-0 border-gray-50 mx-1 ">See all</Button>
            <Button variant="outline" className="rounded-2xl w-[109px] px-[12px] font-medium text-[#111111] text-[12px] py-0 border-gray-50 mx-1">Post a job</Button>
          </div>
        </div>
      </div>
    </div>
  );
}