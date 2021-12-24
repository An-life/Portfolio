import React from 'react';
import style from './Title.module.scss'

export let Title=(props)=>{
    return(<div className={style.title}>
        {props.title}
    </div>)
}