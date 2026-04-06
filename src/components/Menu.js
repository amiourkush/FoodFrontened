import { useState } from "react";
import MenuInfo from "./MenuInfo";

export default function Menu({ menu, food }) {
    const [isOpen, setIsOpen] = useState(true);

    const items = menu?.card?.card?.itemCards || [];

    
    const filteredItems = items.filter((item) => {
        if (food === "veg") return item?.card?.info?.isVeg === 1;
        if (food === "nonveg") return item?.card?.info?.isVeg !== 1;
        return true;
    });

    return (
        <div className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition">

           
            <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h1 className="text-lg font-bold text-gray-800">
                    {menu?.card?.card?.title}
                </h1>

                
                <span className="text-2xl font-bold">
                    {isOpen ? "⌃" : "⌄"}
                </span>
            </div>

            
            {isOpen && (
                <div className="px-4 pb-3 space-y-4">

                    {filteredItems.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No items available
                        </p>
                    ) : (
                        filteredItems.map((menuinfo) => (
                            <MenuInfo
                                key={menuinfo?.card?.info?.id}
                                menuinfo={menuinfo}
                            />
                        ))
                    )}

                </div>
            )}
        </div>
    );
}




// import { useState } from "react"
// import MenuInfo from "./MenuInfo"

// export default function Menu({menu,food}){
//     const [IsOpen,setIsOpen]=useState(true);
//     if(IsOpen){
//         if(food=='veg'){
//             return( <>
//           <div className="w-full">
//             <div className="flex justify-between">
//             <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
//             <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
//             </div>
//             <div>
//                 {
//                     menu?.card?.card?.itemCards?.filter((item)=>"isVeg" in item?.card?.info).map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
//                 }
//             </div>
//           </div>
//         </>)
//         }
//          if(food=='nonveg'){
//             return( <>
//           <div className="w-full">
//             <div className="flex justify-between">
//             <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
//             <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
//             </div>
//             <div>
//                 {
//                     menu?.card?.card?.itemCards?.filter((item)=>!("isVeg" in item?.card?.info)).map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
//                 }
//             </div>
//           </div>
//         </>)
//         }
        

//          return(
//         <>
//           <div className="w-full">
//             <div className="flex justify-between">
//             <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
//             <button onClick={()=>{setIsOpen(false)}}>{IsOpen?"up":"down"}</button>
//             </div>
//             <div>
//                 {
//                     menu?.card?.card?.itemCards?.map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
//                 }
//             </div>
//           </div>
//         </>
//     )
//     }
//     else{
        
//         return(<>
//         <div className="w-full">
//             <div className="flex justify-between">
//             <h1 className="text-xl font-extrabold text-red-600">{menu?.card?.card?.title}</h1>
//             <button onClick={()=>{setIsOpen(true)}}>{IsOpen?"up":"down"}</button>
//             </div>
//             </div>
        
//         </>)
//     }
   
// }