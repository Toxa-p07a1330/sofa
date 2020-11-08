import React from "react"
class Place extends React.Component{
    render(props) {
        let style = {
            width: "24%",
            height: "30%",
            display: "block",
            border: "1px solid black",
            textAlign: "center",
            padding:"1%"
        }
        let prop = this.props.props;
        console.log(prop)
        console.log(111111)
        return <div style={style}>
            <div>Адрес: {prop.address}</div>
            <br/>
            <button>
                <a href={"http://localhost:3000/login?workerID="+prop.workerId+"&serviceID="+prop.serviceID+"&placeID="+prop.id}>
                    Выбрать
                </a>
            </button>
        </div>
    }
}

export  default  Place