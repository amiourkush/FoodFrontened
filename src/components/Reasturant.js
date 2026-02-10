import { useState,useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Reasturant(){
     
    const [Restdata,setRestdata]=useState([]);

    useEffect(()=>{ 
    async function fetchdata(){
     const proxy="https://cors-anywhere.herokuapp.com/";
     const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

    const response = await fetch(proxy+url);
    const data = await response.json();
    setRestdata(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

    fetchdata();
    
   // console.log(Restdata);
    
    },[])
    
    if(Restdata.length==0){
        return <Shimmer></Shimmer>
    }




    return(
        <>
        <div className="w-[80%] flex flex-wrap mx-auto gap-4 mt-20">
            {
              Restdata.map((value)=><RestCard key={value?.info?.id} value={value}></RestCard>)
            }
        </div>

        </>
    )
}