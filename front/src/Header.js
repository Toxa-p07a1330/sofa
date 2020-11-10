import React from 'react';

let Header = ()=>{
    let style = {
        backgroundColor: "darkred",
        height: "7vh",
        display: "block",
        width:"100vw"
    }
    let styleButton = {
        backgroundColor: "darkred",
        float: "left",
        width: "50vw",
        textAlign: "center",
        padding: "auto",
        fontColor: "blue",
        fontSize: "20px"
    }
    return(
        <div style={style}>
            SOME SHAPKA GOES HERE
        </div>
    )

}
export default Header;
