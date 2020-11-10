import React from 'react'
import Place from "./Place";
class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            place: null,
            service: null,
            worker: null,
            isLoadedPlace: 0,
            isLoadedService:0,
            isLoadedeWorker: 0
        }
    }
    render() {
        let style = {

        }
        let getParamsFromString = ()=>{
            let search = window.location.search.replace("?", "");
            search = search.split("&");
            let ret = {}
            let fParam = search[0];
            let sParam = search[1];
            let tParam = search[2];
            ret[fParam.split("=")[0]]=(+fParam.split("=")[1]);
            ret[sParam.split("=")[0]]=(+sParam.split("=")[1]);
            ret[tParam.split("=")[0]]=(+tParam.split("=")[1]);
            return ret;
        }
        let registr = (wID, sID, pID, duration)=>{
           let name = document.getElementById("name").value
            let phone = document.getElementById("phone").value;
           let id = new Date()/1;
           let startTime = new Date(document.getElementById("data_input").value)/1000
            console.log(startTime)
            fetch("http://localhost:3001/customRequest/" +
                `INSERT INTO clients (id, name, phone) values (${id}, '${name}', ${phone})`)
            fetch("http://localhost:3001/customRequest/" +
                `INSERT INTO schedule (workerId, clientId, serviceId, placeId, startAt, endAt) 
                values (${wID}, ${id},${sID},${pID}, ${startTime}, ${startTime+duration})`)
            console.log(duration)

        }
        console.log(getParamsFromString())
        return (
            <div>
                <div style={style}>
                    <div>Введите регистрационные данные: </div>
                    <div>
                        Имя<br/>
                        <input type="text" id="name" />
                        <br/>
                        Номер телефона
                        <br/>
                        <input type="tel" id="phone"/>
                    </div>
                    <div>
                        <br/><br/>
                        <div>
                            Данные о заказе
                        </div>
                        {(()=>{
                            if (this.state.isLoadedeWorker*this.state.isLoadedPlace*this.state.isLoadedService)
                            {
                                let place = this.state.place[0];
                                let service = this.state.service[0];
                                let worker  = this.state.worker[0];
                                console.log(this.state)
                                return <div>
                                    <div>Тип услуги: {service.type}</div>
                                    <div>Название услуги: {service.name}</div>
                                    <div>Описание услуги: {service.description}</div>
                                    <div>Продолжительность услуги: {service.duration/60} мин</div>
                                    <div>ФИО исполнителя: {worker.wname}</div>
                                    <div>Номер телефона исполнителя: {worker.phone}</div>
                                    <div>Адрес пункта проведения: {place.address}</div>
                                </div>
                            }
                            else {
                                let condition = this.props.location.search;
                                condition = condition.replace("?", "");

                                if (this.state.place === null)
                                    fetch("http://localhost:3001/customRequest/Select%20*%20from%20places" +
                                        " where id="+getParamsFromString().placeID).then(
                                        (response)=>{
                                            response.json().then(
                                                (json)=>{
                                                    let newState = {};
                                                    newState.place = json;
                                                    newState.isLoadedPlace = 1;
                                                    this.setState(newState);
                                                },
                                                reason => {

                                                }
                                            )
                                        },
                                        (reject)=>{
                                            console.log(reject)
                                        }
                                    )
                                if (this.state.worker === null)
                                    fetch("http://localhost:3001/customRequest/Select%20*%20from%20workers" +
                                        " where id="+getParamsFromString().workerID).then(
                                        (response)=>{
                                            response.json().then(
                                                (json)=>{
                                                    let newState = {};
                                                    newState.worker = json;
                                                    newState.isLoadedeWorker = 1;
                                                    this.setState(newState);
                                                },
                                                reason => {

                                                }
                                            )
                                        },
                                        (reject)=>{
                                            console.log(reject)
                                        }
                                    )
                                if (this.state.service === null)
                                    fetch("http://localhost:3001/customRequest/Select%20*%20from%20services" +
                                        " where sid="+getParamsFromString().serviceID).then(
                                        (response)=>{
                                            response.json().then(
                                                (json)=>{
                                                    let newState = {};
                                                    newState.service = json;
                                                    newState.isLoadedService = 1;
                                                    this.setState(newState);
                                                },
                                                reason => {

                                                }
                                            )
                                        },
                                        (reject)=>{
                                            console.log(reject)
                                        }
                                    )
                                return "Loading..."
                            }

                        })()}
                        <br/>

                        <div>
                            Дата и время: (ДД:ММ:ГГГГ ЧЧ:ММ)
                            <input type={"text"} id={"data_input"}/>
                        </div>
                        <div>
                            <div>
                                <button onClick={()=>{registr(this.state.worker[0].id, this.state.service[0].sid,
                                    this.state.place[0].id, this.state.service[0].duration); alert ("Запись оформлена!")}}>
                                    <a>
                                        Подтвердить
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login