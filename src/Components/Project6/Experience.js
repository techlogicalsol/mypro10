import React, { useEffect, useState } from "react";

function Experience(){

    const url = 'https://course-api.com/react-tabs-project'

    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0)

    const fetchJobs = async ()=>{
        const response = await fetch(url)
        const newJobs = await response.json();
        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(()=>{
        fetchJobs()
    }, [])

    if (loading){
        return(
            <div className="container mt-5">
                <h1>Loading....</h1>
            </div>
        );
    }

    const { company, dates, duties, title } = jobs[value]

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title_section">
                            <h3 className="main_menu">Experience</h3>
                            <div className="underline"></div>
                        </div>
                            <div className="row">
                                <div className="col-md-4 mt-5">
                                    <div className="job_info1">
                                        {jobs.map((item, index)=>(
                                            <button 
                                                className={`job_btn ${index === value && 'active_btn'}`}
                                                key={item.id}
                                                onClick={()=> setValue(index)}
                                            >
                                                {item.company}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-8 mt-5">
                                    <div className="job_info2">
                                        <h3>{title}</h3>
                                        <h4>{company}</h4>
                                        <p className="job_date">{dates}</p>
                                    </div>

                                    <div className="duties_job">
                                        {duties.map((duty, index)=>(
                                            <ul key={index}>
                                            
                                            <i class="fas fa-angle-double-right myicon"></i> <li>{duty}</li> 
                                                
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        
        </>
    )
}

export default Experience