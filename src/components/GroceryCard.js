export default function GroceryGridCards({Grocery}){
    return(
        <>
        <div className="flex-none">
            
        <a href={Grocery?.action?.link}>
        <img className="w-[144px] h-[180px] object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Grocery?.imageId}></img>
        </a>
        <h2 className="font-serif font-bold text-center text-base">{Grocery?.action?.text}</h2>
        </div>

        </>
    )
}