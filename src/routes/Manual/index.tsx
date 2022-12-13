import React from "react"
import {Link} from "react-router-dom";

const ManualRoot = ():JSX.Element => {
    return (
        <div>
            <Link to="/manual/create/">Link</Link>
            Manual
        </div>
    )
}

export default ManualRoot