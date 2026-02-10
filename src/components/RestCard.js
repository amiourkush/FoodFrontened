import { Link } from "react-router";

export default function RestCard({value}){
    return(
        <>
        
        <Link to={"/city/delhi/"+value?.info?.id}>
        <div className="mb-4">
            <img className="w-[273px] h-[182px] rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.cloudinaryImageId }></img>
            <div className="w-[90%] mx-auto">
                <h1 className="font-bold font-serif text-xl ">{value?.info?.name}</h1>
                <div>
                    <h2 className="font-bold "> {value?.info?.avgRatingString} . {value?.info?.sla?.slaString}</h2>
                </div>
                <div>
                    <h3>{value?.info?.locality}</h3>
                </div>
                
            </div>
        </div>
        </Link>
        </>
    )
}