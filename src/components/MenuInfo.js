export default function MenuInfo({menuinfo}){
    return(
        <>
        <div className="flex justify-between mt-2">
            <div className="w-[80%]">
                <h2 className="text-lg text-black font-bold">{menuinfo?.card?.info?.name}</h2>
                {/* <p>{"Rs"+menuinfo?.card?.info?.defaultPrice/100}</p> */}
                <p>{"Rs"+(menuinfo.card.info.defaultPrice?menuinfo?.card?.info?.defaultPrice/100:menuinfo?.card?.info?.price/100)}</p>
                <p>{menuinfo?.card?.info?.ratings?.aggregatedRating?.rating +"("+menuinfo?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+")"}</p>
                <p>{menuinfo?.card?.info?.description}</p>
            </div>
            <div className="w-[20%] relative">
                <img className="object-cover"  src={"https://media-assets.swiggy.com/swiggy/image/upload/"+menuinfo?.card?.info?.imageId}></img>
                <button className="absolute bottom-1 px-5 py-2 left-18 bg-green-600 rounded-2xl font-bold text-xl text-amber-50 hover:scale-110 hover:shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-green-800">ADD</button>
            </div>
        </div>
        <hr className="mt-2"></hr>
        
        </>
    )
}