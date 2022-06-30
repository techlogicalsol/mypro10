import React, { useState } from "react";
import Data from './Data'
import SingleQuestion from "./SingleQuestion";

function Accordian(){
    
    const [questions, setQuestions] = useState(Data)


    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 question_div">
                        <h3>Questions and answers about login</h3>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                        {questions.map((question)=>(
                            <div className="col-md-10 mx-auto">
                           
                            <SingleQuestion key={question.id} {...question}/>
                      
                            </div>
                              ))}
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Accordian