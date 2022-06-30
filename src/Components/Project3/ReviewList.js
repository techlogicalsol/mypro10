import React, { useState } from "react";
import data from './Data'

function ReviewList(){

    const [index, setIndex] = useState(0)
    //console.log(data)
    const {name, job, image, text} = data[index]

    const checkNumber = (number)=>{
        if(number > data.length - 1){
            return 0
        }
        if(number < 0){
            return data.length - 1
        }
        return number
    }

    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const prevPerson  = () =>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const randomPerson = ()=>{
        let randomNumber = Math.floor(Math.random() * data.length);
        
        if(randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
        //console.log(randomNumber)
    }


    return(
        <>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="wrapper_img">
                    <div className="img_container">
                        <img src={image} alt={name} className="reviewImg" />

                        <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                        </span>
                    </div>
                    </div>

                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="info">{text}</p>

                    <div className="btn_container">
                        <button className="prev" onClick={prevPerson}>
                            <i className="fas fa-angle-double-left"></i>
                        </button>

                        <button className="next" onClick={nextPerson}>
                            <i className="fas fa-angle-double-right"></i>
                        </button>
                        <button className="random" onClick={randomPerson}>Surprise me</button>
                    </div>

                  
                </div>
            </div>


        
        </>
    )
}

export default ReviewList