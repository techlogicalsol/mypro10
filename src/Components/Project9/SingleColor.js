import React, { useEffect, useState } from "react";
import rgbToHex from './utilis';

function SingleColor({rgb, weight ,index, hexColor}){

    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(",")
    console.log(bcg)

    // const hex = rgbToHex(...rgb)

    const hexValue = `#${hexColor}`

    const copyColor = ()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
    }

    useEffect(()=>{
        const timeout = setInterval(()=>{
            setAlert(false)
        }, 3000)

        return ()=>clearTimeout(timeout)

    },[alert])

    return(
        <>
            <div className="col-md-3 mb-3" onClick={copyColor} style={{cursor: "pointer"}}>
                <div className={`color ${index > 10 && 'color_light'}`} style={{backgroundColor: `rgb(${bcg})`}}>
                    <p className="percent">
                        {weight}%
                    </p>

                    <p className="color_value">
                        {hexValue}
                    </p>
                    {alert && <p className="myalert">copied to clipboard</p>}
                </div>
            </div>
        </>
    )
}

export default SingleColor