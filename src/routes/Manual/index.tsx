import React from "react"
import listOfLinks from "./nav.tsx";

const ManualRoot = ():JSX.Element => {
    return (
        <div className="wrap-manual">
            <div className="manual-nav">
                {listOfLinks}
            </div>
            <div className="manual-content">
                <h2>VersaDB User Manual</h2>
                <p>Is a database system that focuses on <b><i>arbitary data, programmability and versatility.</i></b> 
                VersaDB offers a "lose" schema that allow bypassing of the database engine for external processing.</p>

                <p>While VersaDB gives the user the best control of their data, VersaDB is best suited for Software, running on systems that have available processing power and memory.</p>

                <p><b>Note: VersaDB is <i>still</i> in development, errors may occour.</b></p>
                
                <span className="subheading">API URL</span>
                <p>The VersaDB API accepts HTTP <var>POST</var> requests.</p>
                <code>https://db.versa-db.com/</code>

                <p>The VersaDB API is structured as a terminal, that use a pre-determinated key.</p>
                <code>versadb: command</code>

                <p>Each POST request may contain &#40;0.000001 / 4&#41; GB of data.</p>

                
                <span className="subheading">Management</span>
                    
                <code>-create-user username password [perm]</code>
                <p>Create the initial database user: "perm" must be a single, some or all "r/w/e", these are permissions known as "read, write, edit".</p>

                <ol>
                    <li><b>Note:</b> Username can only contain lowercase letters "a" through "z", and numbers "0" with maximume of "9".</li>
                    <li><b>Note:</b> in most cases "rw" perm is sufficient for all database features.</li>
                </ol>

                <p><b>Note:</b> The database will reject -create-user and account creation.
                    When the server reaches it's storage limit.
                This will result in the Error Message: "Registration is Currently Closed".</p>

                <p><b>Real World Example</b> creating VersaDB user:</p>
                <code>versadb: -create-user username password rw</code>

                <code>-create-db username password database</code>
                <p>Creates initial database.</p>

                <h2>Table of Contents</h2>
                <a href="contents.html">New Page</a>
                <ul>
                    <li><span className="toc-title">General:</span><ul>
                            <li><b>Database Structure</b></li>
                            <li><b>-storage</b> - Returns overall storage utilization: <i>string</i>.</li>
                            <li><b>-db-storage</b> - Returns storage utilization for specified database: <i>string</i>.</li>
                        </ul>
                    </li>

                    <li><span className="toc-title">Public Databases:</span><ul>
                            <li><a href="public-databases/"><b>Public Databases (info)</b></a></li>
                            <li><b>-public-db</b> - Works as -frag-info.</li>
                            <li><b>-frag-db-public</b> - Same as -frag-db.</li>
                        </ul>
                    </li>


                    <li><span className="toc-title">Write:</span><ul>
                            <li><a href="write/-db-write.html"><b>-db-write</b></a> - Writes to the end of the current <var>fragment</var>: <i>string</i>.</li>
                            <li><a href="write/-db-write-encode.html"><b>-db-write-encoded</b></a> - Same as <var>-db-write</var> but writes encoded/hashed <i>string</i>.</li>
                        </ul>
                    </li>

                    <li><span className="toc-title">Search/Query:</span><ul>
                            <li><a href="search/-db-search.html"><b>-db-search</b></a> - Executes a loose search against the database.</li>
                            <li><a href="search/-db-search-encoded.html"><b>-db-search-encoded</b></a></li>
                        </ul>
                    </li>

                    <li><span className="toc-title">Fragmentation:</span><ul>
                            <li><a href="fragmentation/-frag.html"><b>-frag</b></a> - Returns Available Fragments: <i>Number</i>.</li>
                            <li><a href="fragmentation/-frag-info.html"><b>-frag-info</b></a> - Returns a JSON Response: <i>[object,...]</i>.</li>
                            <li><a href="fragmentation/-frag-db.html"><b>-frag-db</b></a> - Returns data on given <var>fragment</var> and <var>index</var>: <i>msg</i>.</li>
                            <li><a href="fragmentation/-frag-write.html"><b>-frag-write</b></a> - Writes given <var>data</var> to last <var>index</var> in given <var>fragment</var>: <i>msg</i>.</li>
                            <li><a href="fragmentation/-create-frag.html"><b>-create-frag</b></a> - Creates new database <var>fragment</var>: <i>msg</i>.</li>
                            <li><a href="fragmentation/-frag-dump.html"><b>-frag-dump</b></a> - Returns contents of specified <var>fragment</var>: <i>?</i>.</li>
                            <li><span className="toc-title"></span>Memory Management:<ul>
                                    <li><a href="fragmentation/-load-xmem.html"><b>-load-xmem</b></a> - Returns data contained within specified memory limit.</li>
                                    <li><a href="fragmentation/-lmkl.html"><b>-lmkl</b></a> - Returns a response from the last request.</li>
                                    <li><a href="fragmentation/-refrag.html"><b>-refrag</b></a> - Concatenats database Fragments.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><span className="toc-title">Encryption/hashing Support:</span><ul>
                            <li>SHA512</li>
                            <li>SHA256</li>
                            <li>BASE64</li>
                        </ul>
                    </li>

                    <li><span className="toc-title">Schema:</span><ul>
                            <li><a href="schema/">Main</a></li>
                        </ul>
                    </li>
                    <li><span className="toc-title">Scriptable:</span><ul>
                            <li>Loading Script</li>
                            <li>Uploading Script</li>
                            <li>Scripting Rules</li>
                        </ul>
                    </li>
                </ul>
                
                <h3>Tools & Frameworks</h3>
                <ul>
                    <li><b>Python</b><ul>
                            <li><a href="frameworks/pyVersaDB.html">pyVersaDB</a></li>
                            <li>pyVersaDBpublic - Only for use with public databases.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Error Codes</h4>
                <ul>
                    <li><b>Registration is Currently Closed.</b> - Registration is closed/Server Storage Limit</li>
                </ul>
            </div>
        </div>
    )
}

export default ManualRoot