import React, { useEffect, useState } from "react";
import data from './data';

function ReviewSlider(){

    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length - 1;
        
        if(index < 0 ){
            setIndex(lastIndex);
        }

        if(index > lastIndex){
            setIndex(0)
        }
    },[index, people])


    // useEffect(()=>{
    //    let slider = setInterval(()=>{
    //         setIndex(index + 1)
    //     }, 3000);
    //     return ()=> clearInterval(slider)
    // },[index])

    return(
        <>
         <div className="container mt-3">
             <div className="row">
                <div className="col-md-12">
                <div className="title_section">
                    <h3 className="main_menu mb-5">Reviews</h3>
                    <div className="underline"></div>
                </div>

                {/* <div className="row">
                    {people.map((person, personIndex)=>{
                        const {id, image, name, title, quote} = person;
                        return<div className="col-md-3 bg-info">
                             <img src={image} className="person_img" alt={name} />
                                <h4 className="slider_name">{name}</h4>
                                <p className="slider_subtitle">{title}</p>
                                <p className="slider_text">{quote}</p>
                                <span className="slider_icon">
                                    <i className="fas fa-quote-right"></i>
                                </span>
                        </div>
                    })}
                    
                </div> */}
                </div>
                 
             </div>
         </div>

      

         <div className="section_center">
             
                 {people.map((person, personIndex)=>{
                     const {id, image, name, title, quote} = person;
                     
                     let position = "nextSlide"
                     if(personIndex === index){
                         position = 'activeSlide'
                     }

                     if(personIndex === index -1 || (index === 0 && personIndex === people.length - 1)){
                         position = 'lastSlide'
                     }

                     return <article className={position} key={id}>
                                <img src={image} className="person_img" alt={name} />
                                <h4 className="slider_name">{name}</h4>
                                <p className="slider_subtitle">{title}</p>
                                <p className="slider_text">{quote}</p>
                                <span className="slider_icon">
                                    <i className="fas fa-quote-right"></i>
                                </span>
                            
                
             </article>
            })}
                 
                        <button className="prev1" onClick={()=> setIndex(index - 1)}>
                            <i className="fas fa-angle-double-left"></i>
                        </button>

                        <button className="next1" onClick={()=> setIndex(index + 1)}>
                            <i className="fas fa-angle-double-right"></i>
                        </button>
                    
                    
         </div>
        </>
    )
}

export default ReviewSlider