import React from 'react'
let Menu = ()=>{
    let style = {
        width: "100%",
        display: "inline-block"
    }
    let buttonStle = {
        width: "33%",
        display: "inline-block"

    }
    return(<div>
        <a href={"/home"}><button style={buttonStle}> Главная</button></a>
        <a href={"/services"}><button style={buttonStle}> Услуги</button></a>
        <a href={"/admin"}><button style={buttonStle}> Админиистрирование</button></a>
    </div>)
}
export  default  Menu
