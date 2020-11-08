import React from 'react'
class Clients extends  React.Component{
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
                        let stringToFetch = "http://localhost:3001/customRequest/Select%20*%20from%20clients"
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
                        return <div>
                            {this.state.data.map((value)=>{
                                return <div>{value.name}</div>
                            })}
                        </div>
                    }

                })()}
            </div>
        )
    }
}
export default Clients