import { Link } from "react-router";

export default function RestCard({ value }) {
    const info = value?.info;

    return (
        <Link to={"/city/delhi/" + info?.id}>
            <div className="w-[280px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">

                
                <div className="relative">
                    <img
                        className="w-full h-[180px] object-cover"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            info?.cloudinaryImageId
                        }
                        alt={info?.name}
                    />

                   
                    <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/70 to-transparent"></div>

                    
                    <span className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                        {info?.sla?.slaString}
                    </span>
                </div>

                
                <div className="p-3">

                    
                    <h1 className="font-bold text-lg text-gray-800 truncate">
                        {info?.name}
                    </h1>

                   
                    <div className="flex items-center gap-2 mt-1 text-sm">

                        
                        <span className="bg-green-600 text-white px-2 py-[2px] rounded-md text-xs font-semibold">
                            ⭐{info?.avgRatingString}
                        </span>

                       
                        <span className="text-gray-600">
                            {info?.sla?.slaString}
                        </span>
                    </div>

                    
                    <p className="text-gray-500 text-sm mt-1 truncate">
                        {info?.locality}
                    </p>
                </div>
            </div>
        </Link>
    );
}


// import { Link } from "react-router";

// export default function RestCard({value}){
//     return(
//         <>
        
//         <Link to={"/city/delhi/"+value?.info?.id}>
//         <div className="mb-4">
//             <img className="w-[273px] h-[182px] rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.cloudinaryImageId }></img>
//             <div className="w-[90%] mx-auto">
//                 <h1 className="font-bold font-serif text-xl ">{value?.info?.name}</h1>
//                 <div>
//                     <h2 className="font-bold "> {value?.info?.avgRatingString} . {value?.info?.sla?.slaString}</h2>
//                 </div>
//                 <div>
//                     <h3>{value?.info?.locality}</h3>
//                 </div>
                
//             </div>
//         </div>
//         </Link>
//         </>
//     )
// }