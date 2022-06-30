import React from "react";
import ReviewList from "./ReviewList";

function Reviews(){
    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h2 className="text-center mb-4"> <strong>Our Reviews</strong></h2>
                        
                                <ReviewList />
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Reviews