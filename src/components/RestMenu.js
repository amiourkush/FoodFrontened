import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Menu from "./Menu";

export default function RestMenu(){
    const {id} = useParams();
    const [Restdata,setRestdata] = useState([]);
    useEffect(()=>{
        
         async function fetchdata() {
            const proxy="https://cors-anywhere.herokuapp.com/";
            const swiggy=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxy+swiggy);
            const data= await response.json();
            const tempdata=data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata = tempdata.filter((item)=>"title" in item?.card?.card);
            setRestdata(filterdata);

            
         }
         fetchdata();


    },[])
    return(
        <>
        <div className="w-[80vw] mx-auto">
          {
            Restdata.map((menu)=><Menu key={Restdata?.card?.card?.title} menu={menu}></Menu>)
          }
        </div>
        
        </>
    )
}