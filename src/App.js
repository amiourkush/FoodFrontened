import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption"
import GroceryOption from "./components/GroceryOption";

function App(){

    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>

        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);