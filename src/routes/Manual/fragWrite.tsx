import React from "react";
import listOfLinks from "./nav.tsx";

const FragWrite = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                    <h1>-frag-write</h1>
                <p>Frag Write is a powerful writing tool that allow one to choose which Database Fragment to write to.
                    Unlike -db-write, -frag-write will overwrite the -db-write entry limitations.</p>
                <code>-frag-write database fragment input</code>
                <p><b>Note:</b> If the return message "Database Write "<var>input</var>" To Frag: "<var>fragment</var>" Complete." <var>input</var> is longer than 100 char, it will be replaced with "long!".</p>
                <p><b>Note:</b> -frag-write uses the default delimiter semicolon "<var>;</var>". When writing serval entries at once, the delimiter should not be used at the end, as this is applied automaticly.</p>
                
                <span className="subheading">Usecase</span>
                <p><var>-frag-write</var> is often used in combination with <var>-create-frag</var>, -create-frag allows creation of named fragments.
                In bigger project where the Database are used for a single purpose only <var>-create-frag</var> and <var>-frag-write</var> often have the same <var>fragment</var> called "hdmY".</p>

                <p>So by utilizing <var>-create-frag</var> and <var>-frag-write</var> in combination, we can build a really powerful way of writing data to our database.</p>

                <span className="subheading">Variations</span>
                <p>In some instanced using <var>-frag-write</var> will return absolutely nothing, this is caused by a HTTP Encoding Error.
                <var>-frag-write-b64decode</var> may be used in this case, to bypass the HTTP Encoding Error completely.</p>
                <code>-frag-write-b64decode</code>
            </div>
        </div>
    )
}
export default FragWrite