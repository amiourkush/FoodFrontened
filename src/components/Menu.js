import { useState } from "react"
import MenuInfo from "./MenuInfo"

export default function Menu({menu,food}){
    const [IsOpen,setIsOpen]=useState(true);
    if(IsOpen){
        if(food=='veg'){
            return( <>
          <div className="w-full">
            <div className="flex justify-between">
            <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
            <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
            </div>
            <div>
                {
                    menu?.card?.card?.itemCards?.filter((item)=>"isVeg" in item?.card?.info).map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
                }
            </div>
          </div>
        </>)
        }
         if(food=='nonveg'){
            return( <>
          <div className="w-full">
            <div className="flex justify-between">
            <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
            <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
            </div>
            <div>
                {
                    menu?.card?.card?.itemCards?.filter((item)=>!("isVeg" in item?.card?.info)).map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
                }
            </div>
          </div>
        </>)
        }
        

         return(
        <>
          <div className="w-full">
            <div className="flex justify-between">
            <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
            <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
            </div>
            <div>
                {
                    menu?.card?.card?.itemCards?.map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
                }
            </div>
          </div>
        </>
    )
    }
    else{
        
        return(<>
        <div className="w-full">
            <div className="flex justify-between">
            <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
            <button onClick={()=>{setIsOpen(true)}}>{IsOpen?"up":"down"}</button>
            </div>
            </div>
        
        </>)
    }
   
}