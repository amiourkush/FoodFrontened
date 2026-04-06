import { ShoppingCart, MapPin, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {
  const counter =useSelector(state=>state.cartSlice.count);
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold text-orange-500">
            Swiggy
          </span>
        </div>

        
        <div className="hidden md:flex items-center gap-2 text-gray-700 cursor-pointer">
          <MapPin size={18} />
          <span className="font-medium">Ghaziabad</span>
        </div>

        
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for restaurants or food"
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

       
        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition">
          <ShoppingCart size={22} />
          <Link to="/Checkout">
          <span className="font-medium">Cart{`(${counter})`}</span>
          </Link>
        </div>

      </div>
    </header>
  );
}