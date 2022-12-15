import React from "react";
import listOfLinks from "./nav.tsx";

const FragDump = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
            <h1>-frag-dump</h1>
        <p>Allows for external processing of the fragment contents. -frag-dump, dumps the entire fragment content into a string, with semicolon ";" as delimiter.</p>
        <code>-frag-dump database fragment</code>
        <p>The more advanced version of <var>-frag-dump</var> is <var><a href="-load-xmem.html">-load-xmem</a></var>. 
        While <var>-frag-dump</var> is recomended and the most commonly used. <var>-load-xmem</var> is more powerful. It gives the ability to exstract content from serval database fragments, while not exceeding a specified memory maximume.</p>
    
            </div>
        </div>
    )
}
export default FragDump