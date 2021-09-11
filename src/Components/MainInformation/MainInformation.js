import React from "react";
import style from './MainInformation.module.css';
import styleContainer from './../../Common/Styles/Container.module.css'


export const MainInformation = () => {
    return (
        <div className={style.mainInf}>
            <div className={styleContainer.container}>
                <div className={style.textInf}>
                    <span>Hi There</span>
                    <h1>I am Nastiya </h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photoInf}>
                </div>
            </div>

        </div>
    )

}