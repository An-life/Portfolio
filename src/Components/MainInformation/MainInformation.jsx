import React from "react";
import style from './MainInformation.module.css';
import avatar from './../../Assets/img/avatar.jpg'


export const MainInformation = () => {
    return (
        <div className={style.mainInf}>
            <div className={style.content}><h1>ANASTASIYA ABLAVATSKAYA</h1></div>
            <div className={style.content}><p>Hello! I am a front-end developer.</p></div>
        </div>
    )

}