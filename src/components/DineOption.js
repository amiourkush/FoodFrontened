import { dineoutRestaurants } from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <>
        <div className="w-[80vw] mx-auto ">
            <h1 className="text-2xl font-bold font-serif">Discover new restaurant</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-5 mt-2">
                {
                   dineoutRestaurants.map((Restdata)=><DineCard key={Restdata?.info?.id} Restdata={Restdata}></DineCard>)
                }
            </div>
        </div>
        
        </>
    )
}