export default function JobListingItem({jobListing,index}:{jobListing:any,index:number}) {
  return (
    <div key={index} className="flex items-center gap-2 justify-start">
      <img src={jobListing.avartar} alt={jobListing.title} className="w-[24px] h-[24px] rounded-full" />
      <div className="flex flex-col">
      <p className="text-[12px] text-gray-400">{jobListing.company}</p>
        <p className="font-medium text-gray-800 text-[12px]  line-clamp-1">{jobListing.title}</p>
      
      </div>
    </div>
  )
}
