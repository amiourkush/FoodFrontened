 import { GroceryGridCards } from "../utils/GroceryData"
 import GroceryCard from "./GroceryCard"
export default function GroceryOption(){
    return(
        <>
        <div className="w-[80vw]  mx-auto mb-15 mt-10">
            <h1 className="font-serif font-bold text-[24px] ">Shop groceries on Instamart</h1>
            <div className="flex flex-nowrap overflow-x-auto  gap-5">
            {
                GroceryGridCards.map((Grocery)=><GroceryCard key={Grocery?.id} Grocery={Grocery}></GroceryCard>)
            }
            </div>
        </div>

        </>
    )
}