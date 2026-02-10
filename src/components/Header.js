import { Link } from "react-router";


export default function Header(){

    return(
        <>
        <div className="bg-[#ff5200] font-serif">
        <div className="flex  justify-evenly py-8">
            <div>
              <img className="w-41 h-13" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
            </div>
            <div className="flex gap-10 items-baseline">
                <a className="text-base text-white font-bold" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a className="text-base  text-white font-bold" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a className="text-base  text-white font-bold border-white rounded-2xl border-2 py-3 px-4">Get the App</a>
                <a className="text-base  text-white font-bold  border-black rounded-2xl border-2 py-3 px-4 bg-black">Sign In</a>
            </div>
        </div>
        <div className="pt-16 pb-8 relative">
            <div className="w-[60%] text-[48px] text-white text-center mx-auto pb-5 ">Order food and groceries.Discover best reastaurants.Swiggy it!</div>
            <div className="flex justify-center gap-10 w-[70%] mx-auto">
            <input className="text-black bg-white w-[20%] rounded-[5px] py-3 px-2"  placeholder="Delhi"></input>
            <input className="text-black bg-white w-[50%] rounded-[5px] py-1 pl-3 " placeholder="Search for restaurants,item or more"></input>    

            </div>
            <img className="w-60 h-110 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="w-60 h-110 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>  
        </div>
        <div className="flex justify-center px-12 pb-5">
            <Link to="/reasturant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
            </Link>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
            </a>
            <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
            </a>
        </div>
        
        </div>

        </>
    )

}