import React from "react";
import style from './Title.module.css'

export let Title=(props)=>{
    return(<div className={style.title}>
        {props.title}
    </div>)
}