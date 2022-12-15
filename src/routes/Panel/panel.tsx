import React, {useState, useEffect} from "react"
import './panel.css'

const Panel = ():JSX.Element => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
        isLoggedin: false
    })

    const vdbApi = async (post:string) => {
        const response:Response = await fetch('https://versa-db.com/web/api.php', {
            method: "POST",
            mode: "no-cors",
            headers: {'Content-Type': 'application/json',}, 
            body: JSON.stringify({webdb: post})
        })
        
        const data:string = await response.text()
        console.log(data)
        if(post.split(' ')[0] === "-auth-only"){
            if(data === "true"){
                console.log(data)
                setLogin({
                    ...login,
                    isLoggedin: !login.isLoggedin
                })
            }
        }
    }

    const stateHandler = (event:any):void =>  {
        const {value, name} = event.target 
        if(login.isLoggedin){
            return
        }
        setLogin({
            ...login,
            [name]: value
        })
       
    }

    const handleLogin = ():void => {
        const {username, password} = login
        vdbApi(`-auth-only ${username} ${password}`)
        console.log('Login')
    }

    const render:JSX.Element = login.isLoggedin ? (
        <div>
            <select name="command">
                <option value="-create-user">-create-user</option>
                <option value="-create-db">-create-db</option>
                <option value="-db-write">-db-write</option>
                <option value="-db-write-encoded">-db-write-encoded</option>
                <option value="-db-search">-db-search</option>
                <option value="-db-search-encoded">-db-search-encoded</option>
                <option value="-frag-db">-frag-db</option>
                <option value="-frag">-frag</option>
                <option value="-create-frag">-create-frag</option>
                <option value="-frag-write">-frag-write</option>
                <option value="-frag-info">-frag-info</option>
                <option value="-db-storage">-db-storage</option>
            </select>
        </div>
    )
    : 
    (
        <div className="panel-login">
            <input onChange={(event)=> stateHandler(event)} type="text" name="username" placeholder="Username" />
            <input onChange={(event)=> stateHandler(event)} type="password" name="password" placeholder="Password" />
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
   
    return (render)
}

export default Panel