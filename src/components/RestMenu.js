import { useEffect, useState } from "react";

import Menu from "./Menu";
import { restmenu } from "../../texter2";

export default function RestMenu(){
    //const {id} = useParams();
    const [Restdata,setRestdata] = useState([]);
    useEffect(()=>{
        
         function fetchdata() {
          
            
            const tempdata=restmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata = tempdata.filter((item)=>"title" in item?.card?.card);
             setRestdata(filterdata);
           
           //console.log(Restdata);
         }
         fetchdata();
         
         


    },[])
    // return(
    //     <>
    //     <div className="w-[80vw] mx-auto">
    //       {
    //         Restdata.map((menu)=><Menu key={menu?.card?.card?.title} menu={menu}></Menu>)
    //       }
    //     </div>
        
    //     </>
    // )
}