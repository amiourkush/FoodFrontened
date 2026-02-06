import {imageGridCards} from "../utils/FoodData";
import FoodCard from "./FoodCard";
export default function FoodOption(){
    return(
        <>
        
        
        <div className="w-[80vw] flex flex-wrap mx-auto mt-15 overflow-hidden">
            <h1 className="text-[30px] w-[100%] font-bold">Order our best food options</h1>
            {
               imageGridCards.map((FoodData)=><FoodCard key={FoodData?.id} FoodData={FoodData}/>

               )
            }

        </div>
       

        </>
    )
}