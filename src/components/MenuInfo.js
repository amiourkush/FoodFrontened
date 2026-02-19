export default function MenuInfo({menuinfo}){
    return(
        <>
        <div className="flex justify-between">
            <div className="w-[80%]">
                <h2>{menuinfo?.card?.info?.name}</h2>
                <p>{"Rs"+menuinfo?.card?.info?.defaultPrice/100}</p>
                <p>{menuinfo?.card?.info?.ratings?.aggregatedRating?.rating +"("+menuinfo?.card?.info?.ratings?.aggregatedRating?.ratingCountV2+")"}</p>
                <p>{menuinfo?.card?.info?.description}</p>
            </div>
            <div className="w-[20%] relative">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+menuinfo?.card?.info?.imageId}></img>
                <button className="absolute bottom-1 px-5 py-2 right-[50%] bg-green-500 rounded-xl font-bold">ADD</button>
            </div>
        </div>
        
        </>
    )
}