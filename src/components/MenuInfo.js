import { addItems, IncrementItems, DecrementItems } from "../Store/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function MenuInfo({ menuinfo }) {

    const dispatch = useDispatch();

    const items = useSelector(state => state.cartSlice.items || []);

    const info = menuinfo?.card?.info;

    const element = items.find(item => item.id === info.id);
    const count = element ? element.quantity : 0;

    const itemData = {
        id: info.id,
        name: info.name,
        price: info.defaultPrice
            ? info.defaultPrice / 100
            : info.price / 100,
        imageId: info.imageId
    };

    return (
        <div className="flex justify-between gap-4 border-b pb-4">

            
            <div className="w-[70%]">

                
                <h2 className="text-lg font-semibold text-gray-800">
                    {info.name}
                </h2>

                
                <p className="text-gray-900 font-medium mt-1">
                    ₹{itemData.price}
                </p>

                
                {info?.ratings?.aggregatedRating?.rating && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                        ⭐ {info.ratings.aggregatedRating.rating} 
                        {" ("}
                        {info.ratings.aggregatedRating.ratingCountV2}
                        {")"}
                    </p>
                )}

                
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {info.description}
                </p>
            </div>

            
            <div className="w-[30%] relative">

               
                <img
                    className="w-full h-32 object-cover rounded-xl"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        info.imageId
                    }
                    alt={info.name}
                />

               
                {count === 0 ? (
                    <button
                        onClick={() => dispatch(addItems(itemData))}
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 
                        bg-white text-green-600 font-bold px-4 py-1 rounded-lg 
                        shadow-md hover:bg-green-600 hover:text-white transition"
                    >ADD</button>) : (
                    <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 
                        flex items-center gap-3 bg-green-600 text-white px-3 py-1 
                        rounded-lg shadow-md"
                    >
                        <button
                            onClick={() => dispatch(DecrementItems(itemData))}
                            className="text-lg font-bold px-1"
                        >
                            −
                        </button>

                        <span className="font-semibold">{count}</span>

                        <button
                            onClick={() => dispatch(IncrementItems(itemData))}
                            className="text-lg font-bold px-1"
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}




// import { useState } from "react"
// import { addItems, IncrementItems, DecrementItems } from "../Store/CartSlicer";
// import { useDispatch, useSelector } from "react-redux";

// export default function MenuInfo({ menuinfo }) {

//     //const [count,setCount] =useState(0); don't use local variable/state because whenever route is changed , it loses its value and again becomes equal to initalvalue, also even if the same id of item is present in different categories and you clicked one of them then it will show only where you clicked, not on the others.So make it global 
//    console.log(menuinfo)
//     const item = useSelector(state => state.cartSlice.items);
//     const element = item.find(value => value.id == menuinfo.card.info.id);
//     const count = element ? element.quantity : 0
//     const info = menuinfo.card.info;

// const itemData = {
//     id: info.id,
//     name: info.name,
//     price: info.defaultPrice ? info.defaultPrice / 100 : info.price / 100,
//     imageId: info.imageId
// };

//     const dispatch = useDispatch();
//     function handleItems() {

//        dispatch(addItems(itemData));     // dispatch(addItems(menuinfo.card.info));

//     }

//     function handleDecrementItem() {

//         dispatch(DecrementItems(itemData));
//     }
//     function handleIncrementItem() {

//         dispatch(IncrementItems(itemData));
//     }
//     return (
//         <>
//             <div className="flex justify-between mt-2">
//                 <div className="w-[80%]">
//                     <h2 className="text-lg text-black font-bold">{menuinfo?.card?.info?.name}</h2>

//                     <p>{"Rs" + (menuinfo.card.info.defaultPrice ? menuinfo?.card?.info?.defaultPrice / 100 : menuinfo?.card?.info?.price / 100)}</p>
//                     <p>{menuinfo?.card?.info?.ratings?.aggregatedRating?.rating + "(" + menuinfo?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</p>
//                     <p>{menuinfo?.card?.info?.description}</p>
//                 </div>
//                 <div className="w-[20%] relative">
//                     <img className="object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + menuinfo?.card?.info?.imageId}></img>
//                     {
//                         (count == 0) ? (<button className="absolute bottom-1 px-5 py-2 left-18 bg-green-600 rounded-2xl font-bold text-xl text-amber-50 hover:scale-110 hover:shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-green-800" onClick={handleItems}>ADD</button>) : (<div className="absolute bottom-1 flex gap-2 px-5 py-2 left-18 bg-green-600 rounded-2xl font-bold text-xl text-amber-50 hover:scale-110 hover:shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-green-800" ><button onClick={handleDecrementItem}>-</button><span>{count}</span><button onClick={handleIncrementItem}>+</button></div>)
//                     }

//                 </div>
//             </div>
//             <hr className="mt-2"></hr>

//         </>
//     )
// }