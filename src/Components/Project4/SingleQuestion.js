import React, { useState } from "react";

function SingleQuestion({title, info}){

    const [show, setShow] = useState(false)

    return(
        <>
            <div className="question mt-4">
                <div className="title">
                   {title}
                    <button className="this_btn" onClick={()=> setShow(!show)}>
                        {show ?  <i className="fas fa-minus minus"></i> : <i className="fas fa-plus plus"></i>}   
                    </button>
                  
                </div>

                {show && <p className="accordian_info">{info}</p>}
                
            </div>
         
        </>
    )
}

export default SingleQuestion