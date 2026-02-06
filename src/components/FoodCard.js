

export default function FoodCard({FoodData}){
    return(
        <>
        <div className="w-[144px] h-[180px]">
            <a href={FoodData?.action?.link}>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId}></img>
        </a>
        </div>
        </>

        
    )
}