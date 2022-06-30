import React, { useState } from "react";
import data from './data';

function TextGenerator(){

    const [count, setCount] = useState(0);
    const [text, setText] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        //console.log(typeof count)
        let amount = parseInt(count)
        //console.log(amount)
        if(count <= 0){
            amount = 1
        }

        if(count > 8){
            amount = 8
        }

        setText(data.slice(0, amount))
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <div className="title_section">
                    <h3 className="main_menu mb-5">Text Generator</h3>
                    <div className="underline"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="amount">
                                    Paragraphs:
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="amount"
                                    value={count}
                                    onChange={(e)=> setCount(e.target.value)}

                                />
                                <button className="btn btn-outline-dark mt-3 btn-block" type="submit">Generator</button>
                            </form>
                        </div>
                    </div>

                    </div>

                    <div className="col-md-8 mx-auto mt-5">
                        {text.map((item, index)=>(
                            <p className="textparagraph" key={index}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>        
        </>
    )
}

export default TextGenerator