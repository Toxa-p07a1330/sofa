import React from 'react'
import Service from "./Service";
class Services extends  React.Component{
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    render(){
        return (
            <div>
                {(()=>{
                    if (!this.state.isLoaded)
                    {
                        let condition = this.props.location.search;
                        condition = condition.replace("?", "");
                        let stringToFetch = "http://localhost:3001/customRequest/Select%20*%20from%20services"
                        if (condition)
                            stringToFetch = "http://localhost:3001/customRequest/" + condition;
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
                                        console.log(reason)
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
                        return <div>
                            {this.state.data.map((value)=>{
                                return <Service prop={value} />
                            })}
                        </div>
                    }

                })()}
            </div>
        )
    }
}
export default Services