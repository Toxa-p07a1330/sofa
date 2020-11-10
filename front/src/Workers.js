import React from 'react'
import Worker from "./Worker";
class Workers extends  React.Component{
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
                        let stringToFetch = "http://localhost:3001/customRequest/Select%20*%20from%20workers"
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
                        console.log(this.state.data)
                        return <div style={{height: "100%", width: "100%"}}>
                            {
                                this.state.data.map((value)=>{
                                    console.log("sid="+JSON.stringify(value.sid))

                                    return <Worker prop={value} />
                                })
                            }
                        </div>
                    }

                })()}
            </div>
        )
    }
}
export default Workers