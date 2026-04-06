import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cartSlice",

    initialState: {
        items: [],   // [{id, name, price, imageId, quantity}]
        count: 0
    },

    reducers: {

        // ✅ ADD ITEM (no duplicates)
        addItems: (state, action) => {
            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (element) {
                element.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }

            state.count++;
        },

        // ✅ INCREMENT
        IncrementItems: (state, action) => {
            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (element) {
                element.quantity += 1;
                state.count++;
            }
        },

        // ✅ DECREMENT
        DecrementItems: (state, action) => {
            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (!element) return;

            if (element.quantity > 1) {
                element.quantity -= 1;
            } else {
                state.items = state.items.filter(
                    item => item.id !== action.payload.id
                );
            }

            state.count--;
        },

        // 🔥 REMOVE ITEM (NEW FEATURE)
        removeItem: (state, action) => {
            const element = state.items.find(
                item => item.id === action.payload.id
            );

            if (!element) return;

            // decrease total count properly
            state.count -= element.quantity;

            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );
        },

        // 🔥 CLEAR CART (BONUS)
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        }
    }
});

// ✅ EXPORT ACTIONS
export const {
    addItems,
    IncrementItems,
    DecrementItems,
    removeItem,
    clearCart
} = cart.actions;

// ✅ EXPORT REDUCER
export default cart.reducer;











// import { createSlice } from "@reduxjs/toolkit";

// const cart = createSlice({
//     name:"cartSlice",
//     initialState:{
//         items:[],
//         count:0
//     },
//     reducers:{
//         addItems:(state,actions)=>{
//             state.items.push({...actions.payload,quantity:1})
//             state.count++;

//         },
//         IncrementItems:(state,actions)=>{
//             const element = state.items.find(item=>item.id===actions.payload.id);
//             element.quantity+=1;
//             state.count++;

//         },
//         DecrementItems:(state,actions)=>{
//             const element = state.items.find(item=>item.id===actions.payload.id)
//             if(element.quantity>1){
//                 element.quantity-=1;
//             }
//             else{
//                 state.items = state.items.filter(item=>item.id!=actions.payload.id);
//             }
//             state.count--;

//         }
//     }
// })



// export const {addItems,IncrementItems,DecrementItems} = cart.actions;
// export default cart.reducer;
