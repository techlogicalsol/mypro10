import React, { useState } from "react";

function ToursList({id, image, info, price, name, removeTour}){

    const [readMore, setReadMore] = useState(false)

    return(
        <>
  
                               <div className="col-md-6 mb-5 p-4">
                                   <img src={image} alt={name} 
                                   className="tourImg" />
                                    
                                   <div className="tour_info p-2">
                                       <h4 className="name">
                                         {name}
                                        </h4>
                                       <h4 className="price">${price}</h4>
                                </div>
                                <p className="description p-2">
                                    {readMore ? info : `${info.substring(0,200)}..... `}
                                    
                                    <button className="readMore" onClick={()=> setReadMore(!readMore)}>
                                        {readMore? "show less" : "read more"}
                                    </button>
                                </p>
                                <button className="delete_btn" onClick={()=> removeTour(id)}>Not Interested</button>
                            </div>
                           
                        
        
        </>
    )
}

export default ToursList