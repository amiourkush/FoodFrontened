export default function DineCard({Restdata}){
    return (
        <>
        <div className="flex-none relative">
            <img className=" w-[326.4px] h-[189px] object-cover z-10"src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Restdata?.info?.mediaFiles[0]?.url}></img>
           
            <p className="absolute bottom-2 left-1 text-xl text-white font-serif z-20 text-base">{Restdata?.info?.name}</p>
            <p className="absolute bottom-2 right-0.5 text-xl  text-white font-serif z-20 text-base
            ">{Restdata?.info?.rating?.value}</p>
            <div className="absolute top-0 w-[326.4px] h-[189px] bg-gradient-to-t from-black via-black/5 to-transparent z-10"></div>
        </div>

        </>
    )
}