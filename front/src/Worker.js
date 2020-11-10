import React from "react"
class Worker extends React.Component{
    serviceID = window.location.search
    setServiceID = ()=>{
        this.serviceID = decodeURI(this.serviceID);
        this.serviceID = (this.serviceID+"").split("and")
        this.serviceID = this.serviceID[this.serviceID.length-1]
        this.serviceID = this.serviceID.split(" ")[3];
    }
    render(props) {
        let prop = this.props.prop;
        let style = {
            width: "24%",
            height: "30%",
            display: "inline-block",
            border: "1px solid black"
        }
        this.setServiceID();
        console.log(this.serviceID)
        return <div style={style}>
            <img src={prop.photo} style={{width: "7vw", height: "10vh", float: "left", margin:"7px"}}/>
            <div>{prop.wname}</div>
            <div>Номер телефона: {prop.phone}</div>
            <div>{prop.price?"Цена: "+prop.price:""}</div>
            <div>
                <button>
                    {console.log(this.props.prop.sid)}
                    <a href={"http://localhost:3000/places?serviceId="+this.props.prop.sid+"&" +
                    "workerId="+prop.id}> Выбрать пункт приема </a>
                </button>
            </div>
        </div>
    }
}
export default Worker