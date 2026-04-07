import { useSelector, useDispatch } from "react-redux";
import { IncrementItems, DecrementItems } from "../Store/CartSlicer";

export default function Checkout() {
    const items = useSelector(state => state.cartSlice.items);
    const dispatch = useDispatch();

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            
            <h1 className="text-3xl font-bold mb-6 text-center">
                🛒 Your Cart
            </h1>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">
                        Your cart is empty 
                    </p>
                ) : (
                    <>
                        {items.map(item => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                
                                <div>
                                    <h2 className="font-semibold text-lg">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-500">
                                        ₹{item.price}
                                    </p>
                                </div>

                                
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => dispatch(DecrementItems(item))}
                                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        -
                                    </button>

                                    <span className="font-bold text-lg">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => dispatch(IncrementItems(item))}
                                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}

                        
                        <div className="flex justify-between mt-6 text-xl font-bold">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        
                        <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-green-700 transition">
                            Proceed to Payment 
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}




// import { useSelector } from "react-redux"


// export default function Checkout(){
//     const items =useSelector(state=>state.cartSlice.items);
//     return(
//        <>
//        <div>
//         {
//             items.map(item=><div key={item.id}>{item.name}</div>)
//         }
//        </div>
//        </>
//     )

// }