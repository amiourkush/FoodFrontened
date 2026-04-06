import { useEffect, useState } from "react";
import Menu from "./Menu";
import { restmenu } from "../../texter2";

export default function RestMenu() {
    const [Restdata, setRestdata] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        function fetchdata() {
            const tempdata =
                restmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            const filterdata = tempdata.filter(
                (item) => "title" in item?.card?.card
            );

            setRestdata(filterdata);
        }

        fetchdata();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">

           
            <div className="w-[85vw] mx-auto pt-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Explore Menu
                </h1>
                <p className="text-gray-500">
                    Choose your favorite dishes
                </p>
            </div>

            
            <div className="w-[85vw] mx-auto mt-4 flex gap-4">

                <button
                    className={`px-4 py-2 rounded-full font-semibold transition 
                    ${
                        selected === "veg"
                            ? "bg-green-600 text-white shadow-md"
                            : "bg-white border hover:shadow"
                    }`}
                    onClick={() =>
                        setSelected(selected === "veg" ? null : "veg")
                    }
                >
                    🟢 Veg
                </button>

                <button
                    className={`px-4 py-2 rounded-full font-semibold transition 
                    ${
                        selected === "nonveg"
                            ? "bg-red-600 text-white shadow-md"
                            : "bg-white border hover:shadow"
                    }`}
                    onClick={() =>
                        setSelected(selected === "nonveg" ? null : "nonveg")
                    }
                >
                    🔴 Non-Veg
                </button>

                
                {selected && (
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        onClick={() => setSelected(null)}
                    >
                         Clear
                    </button>
                )}
            </div>

            
            <div className="w-[85vw] mx-auto mt-6 space-y-6">
                {Restdata.map((menu) => (
                    <div
                        key={menu?.card?.card?.title}
                        className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        
                        <h2 className="text-xl font-bold text-gray-800 mb-3">
                            {menu?.card?.card?.title}
                        </h2>

                        <Menu menu={menu} food={selected} />
                    </div>
                ))}
            </div>

        </div>
    );
}



// import { useEffect, useState } from "react";

// import Menu from "./Menu";
// import { restmenu } from "../../texter2";

// export default function RestMenu(){
//     //const {id} = useParams();
//     const [Restdata,setRestdata] = useState([]);
//     const [selected,setselected] = useState(null);
//     useEffect(()=>{
        
//          function fetchdata() {
          
            
//             const tempdata=restmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//             const filterdata = tempdata.filter((item)=>"title" in item?.card?.card);
//              setRestdata(filterdata);
           
//            //console.log(Restdata);
//          }
//          fetchdata();
         
         


//    },[])

    
//     return(
//         <>
//         <div className="w-[80vw] mx-auto mb-2">
//           <button className={"px-2 py-1 text-xl border rounded-xl cursor-pointer mt-5 hover:shadow-lg " + (selected=='veg' ? "bg-green-600": "bg-gray-100")} onClick={()=>{setselected(selected=='veg'?null:'veg')}}>Veg</button>
//           <button className={"px-2 py-1 text-xl border rounded-xl cursor-pointer hover:shadow-lg mt-5 ml-5 "+(selected=='nonveg' ? "bg-red-600": "bg-gray-100")} onClick={()=>{setselected(selected=='nonveg'?null:'nonveg')}}>Non-Veg</button>
//         </div>
//         <div className="w-[80vw] mx-auto">
//           {
//             Restdata.map((menu)=><Menu key={menu?.card?.card?.title} menu={menu} food={selected}></Menu>)
//           }
//         </div>
        
//         </>
//     )
// }