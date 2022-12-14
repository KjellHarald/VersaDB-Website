import React from "react";
import listOfLinks from "./nav.tsx";

const DbWrite = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h1>-db-write</h1>
                <p>Standard write - writes the given input into the latest database fragment.</p>
                <code>-db-write username password database input</code>

                <hr/>

                <h1>-db-write-encoded</h1>
                <p>Writes encoded or hashes strings.</p>
                <code>-db-write-encoded username password database input base64/sha256/512</code>
            </div>
        </div>
    )
}
export default DbWrite