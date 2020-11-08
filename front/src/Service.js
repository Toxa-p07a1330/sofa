import React from "react"
class Service extends React.Component{
    style = {
        display: "inline-block",
        border: "1px solid black",
        padding: "1%",
        width: "17%",
        height: "10%"
    }
    render(props) {
        let prop = this.props.prop;
        console.log(prop)
        return <div style={this.style}>
            Тип услуги: {prop.type} <br/>
            Название: {prop.name}<br/>
            Описание: {prop.description}<br/>
            Продолжительность: {prop.duration/60} мин<br/>
            <button>
                <a href={"http://localhost:3000" +
                "/workers?select%20*%20from%20%20mapWorkersWithServices%20" +
                "join%20services%20JOIN%20workers%20where%20services.sid%20=%20" +
                "mapWorkersWithServices.serviceId%20and%20workers.id%20=%20" +
                "mapWorkersWithServices.workerId%20and%20services.sid%20=%20"+prop.sid}>
                    Выбрать исполнителя
                </a>
            </button>
        </div>
    }
}
export default Service