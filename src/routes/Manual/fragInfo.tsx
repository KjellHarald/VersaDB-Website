import React from "react";
import listOfLinks from "./nav.tsx";

const FragInfo = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h1>-frag-info</h1>
                <p>-frag-info returns a JSON response, detached from the database engine.
                    Allowing the database to be searched in ways that otherwise would not be possible.
                    </p>
                <code>-frag-info database frag: number, indexes: number,...</code>

                <h2>Usage</h2>
                <p><var>-frag-info</var> is used as an intitial query, often combined with <var><a href="-frag-db.html">-frag-db</a></var>. 
                That will return the contents of the database fragment on given hierarchy index.</p>

                <p>It can also be used with <var><a href="-frag-dump.html">-frag-dump</a></var> to return the entierty of the database fragment.</p>
            </div>
        </div>
    )
}
export default FragInfo