import React from "react";

function Categories({filterItems, categories}){
    return(
        <>
           {/* <button className="btn btn-warning" onClick={()=> filterItems("breakfast")}>Breakfast</button>

           <button onClick={()=> filterItems("all")}>All</button> */}


           <div className="container mb-3 mt-4 d-flex justify-content-center">
               {categories.map((category, index)=>(
                   <button className="btn btn-warning menubtn" key={index} onClick={()=> filterItems(category)}>
                       {category}
                   </button>
               ))}
           </div>
        </>
    )
}

export default Categories