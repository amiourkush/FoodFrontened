export default function DineCard({Restdata}){
    return (
        <>
        <div className="flex-none relative  border-gray-400 rounded-2xl overflow-hidden mb-15 shadow-gray-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1
transition-all duration-300">
            <img className=" w-[326.4px] h-[189px] object-cover z-10"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Restdata?.info?.mediaFiles[0]?.url}></img>
           
            <p className="absolute bottom-33 left-1 text-xl text-white font-serif z-20 text-base">{Restdata?.info?.name}</p>
            <p className="absolute bottom-33 right-0.5 text-xl  text-white font-serif z-20 text-base
            ">{Restdata?.info?.rating?.value}</p>
            <div className="absolute top-0 w-[326.4px] h-[189px] bg-gradient-to-t from-black via-black/5 to-transparent z-10"></div>
            <div className="flex flex-col gap-1.5">
                <div className="flex justify-between">
                    <div className="flex gap-1">{Restdata?.info?.cuisines.map((data,index)=>(<h3 key={index}>{data}.</h3>))}</div>
                    <div>{Restdata?.info?.costForTwo}</div>
                </div>
                <div className="flex justify-between">
                    <p>{Restdata?.info?.locality}</p>
                    <p>{Restdata?.info?.locationInfo?.distanceString}</p>
                </div>
                <div className="flex justify-between bg-[#1ba672] font-bold text-[14px] font-serif text-white px-4 py-1 border-0 rounded-[9px] mt-0.5 ">
                    
                  <div>  {Restdata?.info?.offerInfoV3?.vendorOffer?.title} {Restdata?.info?.offerInfoV3?.vendorOffer?.subtitle }</div>
                  <div>{Restdata?.info?.offerInfoV3?.vendorOffer?.subtext}</div>
                </div>
                <div className="mt-1 px-4 py-1 rounded-[9px]  bg-[#c8f9e5]">
                    {Restdata?.info?.customerOffer?.infos[0]?.description}
                </div>
            </div>
        </div>

        </>
    )
}