import React from "react";
import listOfLinks from "./nav.tsx";

const DbSEarch = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h1>-db-search</h1>
                <p>Finds matching results. -db-search may retrive serval entries, and work best for manual searching.</p>
                <code>-db-search username password database input</code>

                <hr/>

                <h1>-db-search-encoded</h1>
                <p><b>Note:</b> Search returns the corresponding fragment and index. But may return more than a single entry, as search is lose checking.
                    For strict checking fragmentation should be utilized.</p>
                <code>-db-search-encoded username password database input base64/sha256/512</code>
            
            </div>
        </div>
    )
}

export default DbSEarch