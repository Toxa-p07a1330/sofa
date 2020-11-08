import React from 'react'
import Place from "./Place";
class Places extends  React.Component{
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    getParamsFromString = ()=>{
        let search = window.location.search.replace("?", "");
        search = search.split("&");
        let ret = {}
        let fParam = search[0];
        let sParam = search[1];
        ret[fParam.split("=")[0]]=+fParam.split("=")[1];
        ret[sParam.split("=")[0]]=+sParam.split("=")[1];
        return ret;
    }
    render(){
        return (
            <div>
                {(()=>{
                    if (!this.state.isLoaded)
                    {
                        let condition = this.props.location.search;
                        condition = condition.replace("?", "");
                        let stringToFetch = "http://localhost:3001/customRequest/Select%20*%20from%20places"

                        fetch(stringToFetch).then(
                            (response)=>{
                                response.json().then(
                                    (json)=>{
                                        let newState = {};
                                        newState.data = json;
                                        newState.isLoaded = true;
                                        this.setState(newState);
                                        console.log(newState)
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
                    else {
                        console.log(this.getParamsFromString())
                        return <div>
                            {this.state.data.map((value)=>{
                                let val = value;
                                val.serviceID = this.getParamsFromString().serviceId;
                                val.workerId = this.getParamsFromString().workerId;
                                console.log(JSON.stringify(val))
                                return <Place props = {val}/>
                            })}
                        </div>
                    }

                })()}
            </div>
        )
    }
}
export default Places