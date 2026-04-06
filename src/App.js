import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Reasturant from "./components/Reasturant";
import { BrowserRouter,Routes,Route } from "react-router";
import RestMenu from "./components/RestMenu";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Store/stores";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";


function App(){

    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome/>}>
            <Route path="/reasturant" element={<Reasturant></Reasturant>}></Route>
            <Route path="/city/delhi/:id" element={<RestMenu></RestMenu>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
        </Routes>
        
        
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);