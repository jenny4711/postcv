export default function JobListingItem({jobListing,key}:{jobListing:any,key:number}) {
  return (
    <div key={key} className="flex items-center gap-2 justify-start p-1  ">
      <img src={jobListing.avartar} alt={jobListing.title} className="w-[24px] h-[24px] rounded-full" />
      <div className="flex flex-col ">
      <p className="text-[12px] text-[#555555] leading-3">{jobListing.company}</p>
        <p className=" text-[#111111] text-[12px]  line-clamp-1">{jobListing.title}</p>
      
      </div>
    </div>
  )
}
