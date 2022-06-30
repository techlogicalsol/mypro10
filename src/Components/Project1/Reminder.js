import React, { useState } from "react";
import List from "./List";
import Data from './Data';
import { Button } from "@material-ui/core";

function Reminder(){

    const [people, setPeople] = useState(Data)


    return(
        <>
            <div className="container mt-3 bg-light">
                <div className="row">
                    <div className="col-md-6 mx-auto center_div mt-4 mb-5">
                        <div className="display-3 text-center mt-4 mb-4">
                            {people.length} Birthday Today!
                        </div>

                        <List 
                            people={people}
                        />

                        {/* <button onClick={()=> setPeople([])}>
                            Clear All
                        </button> */}
                        <Button
                            onClick={()=> setPeople([])}
                            className="mybtn"
                            variant="contained" color="secondary"
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Reminder