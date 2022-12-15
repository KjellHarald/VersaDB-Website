import React from "react";
import listOfLinks from "./nav.tsx";

const Frag = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h1>-frag</h1>
                <p>Returns the count of available database fragments.</p>
                <code>-frag database</code>
            </div>
        </div>
    )
}
export default Frag