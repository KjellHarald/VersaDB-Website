import React, {useState, useEffect} from "react"

const Panel = ():JSX.Element => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
        isLoggedin: false
    })

    const vdbApi = async (post:string) => {
        const response:Response = await fetch('', {method: "POST", body: JSON.stringify(post)})
        const data:string = await response.text()
    
        if(post.split(' ')[0] === "-auth-only"){
            const loginCheck = data === "true" ? "" : setLogin({
                ...login,
                isLoggedin: !login.isLoggedin
            })
        }
    }

    const stateHandler = (event:any):void =>  {
        const {value, name} = event.target 
        setLogin({
            ...login,
            [name]: value
        })
       
    }

    const handleLogin = ():void => {
        console.log('Login')
        console.log(login)
    }

    const render:JSX.Element = login.isLoggedin ? (
        <div>
            <p>Loggedin</p>
        </div>
    )
    : (
        <div>
            <input onChange={(event)=> stateHandler(event)} type="text" name="username" placeholder="Username" />
            <input onChange={(event)=> stateHandler(event)} type="password" name="password" placeholder="Password" />
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
   
    console.log(login)
    return (
        render
    )
}

export default Panel