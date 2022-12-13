import React, {useState, useEffect} from "react";

const Status = ():JSX.Element => {
    const [status, setStatus] = useState([])

    const retriveStatus = async () => {
        const response = await fetch('https://versa-db.com/web/api.php', {
            'method':'post',
            body: JSON.stringify({webdb: `-public-db versadb status`})
        })
    
        const responseData = await response.json()
        setStatus(responseData)
    }

    useEffect(()=>{
        retriveStatus()
    }, [])
    
    const statuses:JSX.Element[] = status.map((s) => {
        const {service, description, status} = s
        return (
            <div className="status">
                <div className="service">
                    {service}
                </div>

                <div className="service-description">
                    {description}
                </div>

                <div className="status-indicator" style={{backgroundColor: `${status === "OK" ? "#00b140" : status === "DEG" ? "orange" : "red"}`}}>
                    {status}
                </div>
            </div>
        )
    })

    return (
        <div className="wrap-status">
            <div className="status status-leader">
                <div className="service">
                    <b>Service:</b>
                </div> 
                <div className="service-description">
                    <b>Description:</b>
                </div>
                <div className="status-indicator">
                    <b>?</b>
                </div>
            </div>
            {statuses}
        </div>
    )
}

export default Status