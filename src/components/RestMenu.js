import { useEffect, useState } from "react";

import Menu from "./Menu";
import { restmenu } from "../../texter2";

export default function RestMenu(){
    //const {id} = useParams();
    const [Restdata,setRestdata] = useState([]);
    const [selected,setselected] = useState(null);
    useEffect(()=>{
        
         function fetchdata() {
          
            
            const tempdata=restmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata = tempdata.filter((item)=>"title" in item?.card?.card);
             setRestdata(filterdata);
           
           //console.log(Restdata);
         }
         fetchdata();
         
         


   },[])

    
    return(
        <>
        <div className="w-[80vw] mx-auto mb-2">
          <button className={"px-2 py-1 text-xl border rounded-xl cursor-pointer mt-5 hover:shadow-lg " + (selected=='veg' ? "bg-green-600": "bg-gray-100")} onClick={()=>{setselected(selected=='veg'?null:'veg')}}>Veg</button>
          <button className={"px-2 py-1 text-xl border rounded-xl cursor-pointer hover:shadow-lg mt-5 ml-5 "+(selected=='nonveg' ? "bg-red-600": "bg-gray-100")} onClick={()=>{setselected(selected=='nonveg'?null:'nonveg')}}>Non-Veg</button>
        </div>
        <div className="w-[80vw] mx-auto">
          {
            Restdata.map((menu)=><Menu key={menu?.card?.card?.title} menu={menu} food={selected}></Menu>)
          }
        </div>
        
        </>
    )
}