import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

//npm install values.js --save


function ColorGen(){

    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    //const [list, setList] = useState([]);

    const [list, setList] = useState(new Values("#f1c40f").all(10));

    const handleSubmit = (e)=>{
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            //console.log(colors) 
        } catch (error) {
            setError(true)
            console.log(error)
        }       
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div className="title_section">
                    <h3 className="main_menu mb-5">Color Generator</h3>
                    <div className="underline"></div>
                    </div>
                        <form onSubmit={handleSubmit} className="mb-5">

                            <input 
                                type='text' 
                                value={color}
                                onChange={(e)=> setColor(e.target.value)}
                                className={`${error? "error"  : null}`} 
                                id="colorInput"
                                
                              
                            />
                         
                         <Button variant="contained" color="primary" type="submit" 
                         style={{marginTop: "20px", width: "100%"}}
                         
                         >
                                Submit
                        </Button>
                           
                        </form>
                    </div>

                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            {list.map((color, index)=>(
                                <SingleColor 
                                    key={index} 
                                    {...color}
                                    index={index}
                                    hexColor={color.hex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ColorGen