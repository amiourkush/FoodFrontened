import MenuInfo from "./MenuInfo"

export default function Menu({menu}){
    return(
        <>
          <div className="w-full">
            <h1>{menu?.card?.card?.title}</h1>
            <div>
                {
                    menu?.card?.card?.itemCards.map((menuinfo)=><MenuInfo key={menuinfo?.card?.info?.id} menuinfo={menuinfo}></MenuInfo>)
                }
            </div>
          </div>
        </>
    )
}