import React from "react";
import listOfLinks from "./nav.tsx";

const FragCreate = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                    <h1>-create-frag</h1>
                <p>Allows the user to create a fragment, this is ideal for serval use cases.</p>
                <code>-create-frag database fragment</code>
            </div>
        </div>
    )
}
export default FragCreate