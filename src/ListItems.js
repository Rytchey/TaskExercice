import React from "react";
import './ListItems.css'

const ListItems = (props) => {
    var classchecked = "list";
    var msg;
    if (props.checked) {
        classchecked += " colortext";
        msg = " - Concluído";
    } else {
        msg = "";
    }
    return (
        <div className={classchecked} key="item.key">
            <input type="checkbox" onChange={props.changed} /> <label>{props.name}</label> <b>{msg}</b> <hr></hr>
        </div>
    );
}

export default ListItems;