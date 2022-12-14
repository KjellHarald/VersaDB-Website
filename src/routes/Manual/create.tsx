import React from "react";
import listOfLinks from "./nav.tsx";

const CreateDatabase = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content"></div>
        </div>
    )
}
export default CreateDatabase