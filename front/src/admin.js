import React from 'react'
let Admin = ()=>{
    let style = {
        display: "inline-block",
        width: "80%",
        padding: "2%",
        marginLeft: "10%",
        textAlign: "center"
    }
    const password = "password";
    let putResponse = ()=>{
        let pass = prompt("Введите пароль");
        if (pass !== password){
            alert("Неверный пароль")
            return null
        }

        let request = "http://localhost:3001/customRequest/" + document.getElementById("input").value;
        fetch(request).then(
            response=>{
                response.text().then(
                    text =>{
                        document.getElementById("response").innerHTML=text
                        console.log(JSON.stringify(text))
                    },
                    reason => {
                        document.getElementById("response").innerHTML=JSON.stringify(reason);
                        console.log(JSON.stringify(reason))
                    }
                )
            },
            reason => {
                document.getElementById("response").innerHTML=JSON.stringify(reason);
                console.log(JSON.stringify(reason))
            }
        )
    }
    return <div style={style}>
        Поле ввода команд для администратора<br/>
        <input type={"text"} id={"input"}/><br/>
        <button onClick={()=>{putResponse()}}>Выполнить</button><br/>
        <div id={"response"}> </div>
    </div>
}
export default Admin