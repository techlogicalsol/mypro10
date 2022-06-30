import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ToursList from "./ToursList";

function Tour(){

    const baseURL = `https://course-api.com/react-tours-project`

    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

   
    const removeTour = (id)=>{
        const newTour = tours.filter((tour)=> tour.id !== id)
        setTours(newTour)
    }


    const fetchTours = async ()=>{
        setLoading(true)
        try {
            
        const response = await fetch(baseURL)
        const tours = await response.json()
        console.log(tours)
        setLoading(false)
        setTours(tours)

        } catch (error) {
            
            setLoading(false)
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchTours()
    },[])


  

    if(loading){
        return(
            <Loading />
        )
    }


    if(tours.length === 0){
        return <div className="container">
                  <div className="refresh bg-dark p-4">
                  <h2 className="text-center"> No Tours Left </h2>
                  <button className="refresh" onClick={fetchTours}>Refresh</button>
                </div>
                </div>
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                        {tours.map((tour)=>(
            <ToursList 
                 key={tour.id} {...tour}
                 removeTour={removeTour}
            />
            ))}  
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Tour