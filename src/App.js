import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Reasturant from "./components/Reasturant";
import { BrowserRouter,Routes,Route } from "react-router";
import RestMenu from "./components/RestMenu";


function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/reasturant" element={<Reasturant></Reasturant>}></Route>
            <Route path="/city/delhi/:id" element={<RestMenu></RestMenu>}></Route>
        </Routes>
        
        
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);