import React from "react";

function List({people}){
    return(
        <>
             {people.map(({image, name, age})=>(
            <div className="info"> 
           
                 <div className="info_Img">  
                    <img src={image} alt={name} className="img" /> 
                 </div>

                 <div className="name">
                     {name}
                 </div>

                <div className="age">
                    {age} years
                </div>
             
            </div>
        
        ))}
        </>
    )
}

export default List