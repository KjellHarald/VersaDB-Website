import React from "react";
import listOfLinks from "./nav.tsx";

const XloadMem = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
            <h1>-load-xmem</h1>
        <p>Initiates a memory calculation process. 
        By loading contents from <var>fragments</var> and calculating the bytes into <var>kilobyte(s)</var>, 
        <var>megabyte(s)</var> or <var>gigabyte(s)</var> that are dumped as a response for local processing.</p>

        <h2>Description</h2>
        <p><b>-load-xmem</b> is a feature that allow retrival of "datasets" for local processing, that will not exceed (by much) the specified maximume.
        The "maximume" is a calculation of how much memory the retrived dataset will require on the requesting system.
        Allowing the application to hold the working data in memory, increasing speed as it does not need to wait for read/write requests, or continue to send requests to the database.</p>


        <h3>Breakdown</h3>
        <code>-load-xmem db search mem prefix delimiter</code>

        <p><b>Note:</b> -load-xmem accepts a few arguments, some which can be left blank.
        The once that may be left blank are the following:</p>
        <code>search, delimiter</code>
        
        <h4>Arguments Breakdown</h4>
        <p><var>search</var> accepts a string with values seperated by " " (space), new line and semicolon. 
        It may be left blank if all database content is to be searched over time.
        <var>search</var> utilize the <var>-frag-db</var> query to find the provided indexes for <var>-load-xmem</var>.</p>

        <code>search: "frag idx;frag idx" : <i>string</i> | Default <i>none</i></code>

        <p><b>Example:</b></p>
        <code>search: "07112022 2;07112022 12;07112022 32;07112022 42"</code>

        <p><var>mem</var> int: ammount of data in memory that is to be returned.</p>
        <code>mem: int : <i>int</i> | Default <i>100</i></code>

        <p><var>prefix</var> choose between "kb", "mb" or "gb", will return error if not set.</p>
        <code>prefix: kb/mb/gb : <i>string</i> | Default <i>kb</i></code>

        <p><var>delimiter</var> set a uniqe seperator that overwrite the default semicolon ";" set by VersaDB.
        <b>Note:</b> if the default delimitor is not found by -load-xmem, it will check if the given <var>delimiter</var>
        exist in the database <var>fragment</var>.</p>

        <p><b>Note:</b> It's recomended the keep the Default <var>delimiter</var> for consistency reasons.</p>
        <code>delimiter: <i>;</i> : <i>char</i> | Default <i>;</i></code>
            </div>
        </div>
    )
}
export default XloadMem