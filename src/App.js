import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import FoodOption from "./components/FoodOption"
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Reasturant from "./components/Reasturant";

function App(){

    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Reasturant></Reasturant>

        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);