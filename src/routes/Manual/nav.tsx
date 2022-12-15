import React from "react";
import {Link} from "react-router-dom";

const links: {path:string, name:string}[] = [
    {path:"/manual/create/", name: "Create Database"},
    {path:"/manual/create-db-user/", name: "Create Database User"},
    {path:"/manual/db-write/", name: "Database Write"},
    {path:"/manual/db-search/", name: "Database Search"},
    {path:"/manual/frag/", name: "Database Frag"},
    {path:"/manual/frag-info/", name: "Database Frag Info"},
    {path:"/manual/db-frag/", name: "Database Fragment"},
    {path:"/manual/db-frag-write/", name: "Database Frag Write"},
    {path:"/manual/create-frag/", name: "Database Create Fragment"},
    {path:"/manual/frag-dump/", name: "Database Fragment Dump"},
    {path:"/manual/load-xmem/", name: "Database Load Xmem"},
]

const listOfLinks:JSX.Element[] = links.map((linkList) => {
    const {path, name} = linkList
    return (
        <Link to={path}>{name}</Link>
    )
})

export default listOfLinks