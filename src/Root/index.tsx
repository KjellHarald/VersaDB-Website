import React from "react";

const Root = ():JSX.Element => {
    return (
        <section>
        <div className="middle" id="heroimg">
            <h1>Build on the Versatility of VersaDB</h1>
            <div className="two">
                <div className="item">
                    <h2>VersaDB gives Hobbyist, Students and Scientists,
                    the power they require to be creative!</h2>

                    <p>VersaDB is bakes directly into your application. It's is data processed locally.
                    Increacing transaction speed, reducing request times and latency, giving <b>you</b> the ability to computate it into new fragments, change it's type, and automate!</p>

                    <p>Structure your data, <b>your way</b>! Store as JSON, CSV, XML or simply plain text.</p>
                    <p><b>The choise is yours!</b></p>
                </div>

                <div className="item" id="frag-vis"></div>
            </div>
        </div>

        <div className="three">
            <div className="item">
                <h2>Try VersaDB</h2>
                <p>Try VersaDB completely free - no strings attached. With a 5 GB playground!</p>
            </div>
            <div className="item">
                <h2>User Manual</h2>
                <p>Enjoy a categorised <a href="manual/">Manual</a>, that will become structured as a game with real code examples.</p>
            </div>
            <div className="item">
                <h2>Process Externally</h2>
                <p>VersaDB utilize data fragmentation, meaning that you can Build External Database Engines.</p>
            </div>
        </div>

        <div className="middle">
            <div className="two">
                <div className="item">
                    <h3>Programmable</h3>

                    <p>VersaDB are build on simple - yet powerful building blocks.
                    Optimized for data manipulation, re-structuring and concatenation.
                    </p>

                </div>

                <div className="item">
                    <h3>JSON, XML, CSV... And more!</h3>
                    <p>You choose your schema, data optimized for it's specific use case is not always a standard.
                    And adding additional functionallity means less performance.
                    </p>
                </div>
            </div>

            <div className="two" style={{backgroundColor: "#1E1E1E", borderRadius: "5px"}}>
                <div className="item" id="ccject"></div>

                <div className="item">
                    <h3>Collatz Conjecture</h3>
                    <p><i>Example of Python running the Collatz Conjecture, utilizing VersaDB to store information.</i></p>

                    <p>At the top we are calculating how much storage we are using in our script (currently set to 1 MB) and we will send this data to VersaDB when 1 MB (MegaByte) is reached.</p>

                    <p>Sending the collected data in larger data dumps, we can utilize available system memory as a temporary storage. And have less requests to our database.</p>
                </div>
            </div>
        </div>

        </section>
    )
}
export default Root