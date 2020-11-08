// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
app.get("/workers*", function(request, response){

    // отправляем ответ
    response.send("<h2>Workers list</h2>");
});
app.get("/clients*", function(request, response){

    // отправляем ответ
    response.send("<h2>clients list</h2>");
});

app.get("/services*", function(request, response){

    // отправляем ответ
    response.send("<h2>Список услуг</h2>");
});

app.get("/schedule*", function(request, response){

    // отправляем ответ
    response.send("<h2>Schedule</h2>");
});
app.get("/customRequest*", (request, response)=>{
    let req = request.url.split("/")[2];
    req = decodeURI(req);
    response = setHeaders(response);
    getDataFromSQLite(req).then(
        (responseDB)=>{
            response.write(JSON.stringify(responseDB));
            console.log(responseDB);
            response.end();
        },
        (reject)=>{
                response.write(JSON.stringify(reject));
                response.end();
        }
    )
})

function  getDataFromSQLite(request){
    console.log(request)
    let sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('../db/db.db');
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all(request, (err, rows)=>{
                if (!err)
                {
                    resolve(rows)
                }
                else {
                    reject(err);
                }
            })
        })
        db.close();
    });
}
function setHeaders(response){
    response.setHeader("Content-Type", "application/json; charset=UTF-8");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
    return response;
}

// начинаем прослушивать подключения на 3000 порту
app.listen(3001);