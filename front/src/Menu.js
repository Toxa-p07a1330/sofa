import React from 'react'
let Menu = ()=>{
    let style = {
        width: "100%",
        display: "inline-block"
    }
    return(<div>
        <button><a href={"/home"}> Главная</a></button>
        <button><a href={"/workers"}> Исполнители</a></button>
        <button><a href={"/places"}> Точки</a></button>
        <button><a href={"/clients"}> Клиенты</a></button>
        <button><a href={"/services"}> Услуги</a></button>
        <button><a href={"/login"}> Авторизация(администратор)</a></button>
    </div>)
}
export  default  Menu
