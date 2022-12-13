import React from "react";

const Header = ():JSX.Element => {
    return (
        <header>
            <div id="text-title"><span className="underline-white">Versa</span><span className="underline-red">DB</span></div>
            
            <div>
                <li><a href="/">Home</a></li>
                <li><a href="/status/">Status</a></li>
                <li><a href="/manual/">Manual</a></li>
                <li><a href="/panel/">Panel</a></li>
            </div>
        </header>
    )
}

export default Header