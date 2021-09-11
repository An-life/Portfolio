import React from "react";
import style from './MyWork.module.css';


export const MyWork = (props) => {
    return (
        <div className={style.myWork}>
            <div className= {style.container}>
                <div className={style.preview}> <button>Preview</button></div>
                <h3 className={style.title} >{props.title}</h3>
                <p className={style.text}>{props.text}</p>
            </div></div>
    )

}