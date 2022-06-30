import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate()

    const handleRouteReminder = () =>{
        navigate('/reminder')
    }

    const handleRouteTour = () =>{
        navigate('/tour')
    }

    const handleRouteReviews = () =>{
        navigate('/reviews')
    }

    const handleRouteAccordian = ()=>{
        navigate('/accordian')
    }

    const handleRouteMenu = ()=>{
        navigate('/menu')
    }

    
    const handleRouteExp = ()=>{
        navigate('/experience')
    }

    const handleRouteSlider = ()=>{
        navigate('/reviewslider')
    }

    
    const handleRouteTextGen = ()=>{
        navigate('/textgen')
    }

    const handleRouteColorGen = ()=>{
        navigate('/colorgen')
    }

    const handleRouteGrocery = ()=>{
        navigate('/grocery')
    }

    const handleRouteStripe = ()=>{
        navigate('/stripe')
    }

    

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 bg-light">
                        <div>Let's Build</div>
                        <div>Project</div>
                    </div>
                </div>
            </div>
        
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                        <div className="col-md-4" style={{backgroundColor: "#81ecec"}}>
                            <h3>Reminder</h3>
                            <button onClick={handleRouteReminder}>View</button>
                        </div>

                        <div className="col-md-4" style={{backgroundColor: "#74b9ff"}}>
                            <h3>Tours</h3>
                            <button onClick={handleRouteTour}>View</button>
                        </div>

                        <div className="col-md-4 bg-secondary">
                            <h3>Reviews</h3>
                            <button onClick={handleRouteReviews}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-success">
                            <h3>Accordian</h3>
                            <button onClick={handleRouteAccordian}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-warning">
                            <h3>Menu</h3>
                            <button onClick={handleRouteMenu}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-info">
                            <h3>Professional Experience</h3>
                            <button onClick={handleRouteExp}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-danger">
                            <h3>Reviews Slider</h3>
                            <button onClick={handleRouteSlider}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-primary">
                            <h3>Text Generator</h3>
                            <button onClick={handleRouteTextGen}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-secondary">
                            <h3>Color Generator</h3>
                            <button onClick={handleRouteColorGen}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-light">
                            <h3>Grocery Bud</h3>
                            <button onClick={handleRouteGrocery}>View</button>
                        </div>

                        <div className="col-md-4 mt-3 bg-warning">
                            <h3>Stripe Payment</h3>
                            <button onClick={handleRouteStripe}>View</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home