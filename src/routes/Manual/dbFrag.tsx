import React from "react";
import listOfLinks from "./nav.tsx";

const Dbfrag = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h1>-frag-db</h1>
                <p>Returns the entry from given fragment on specified index.</p>
                <code>-frag-db database fragment index</code>
            </div>
        </div>
    )
}
export default Dbfrag