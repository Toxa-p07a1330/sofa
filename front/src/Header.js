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
        padding: "auto"
    }
    return(
        <div style={style}>
            <div style={styleButton}>
                <button>
                    <a href={"http://localhost:3000/"}>
                        На главную
                    </a>
                </button>
            </div>
            <div style={styleButton}>
                <button>
                    <a href={"http://localhost:3000/admin"}>
                        В паннель администратора
                    </a>
                </button>
            </div>
        </div>
            )

}
export default Header;
