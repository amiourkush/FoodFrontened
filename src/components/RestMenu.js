import { useEffect, useState } from "react";

import Menu from "./Menu";
import { restmenu } from "../../texter2";

export default function RestMenu(){
    //const {id} = useParams();
    const [Restdata,setRestdata] = useState([]);
    useEffect(()=>{
        
         function fetchdata() {
          
            
            
           
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