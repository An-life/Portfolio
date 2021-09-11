import React from "react";
import style from './Footer.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={styleContainer.container} >
                <div className= {style.container}>
            <h2 className={style.title} >Ablovatskaya Anastasiya</h2>
            <div className={style.links}>
                <a href='' className={style.link}>NW</a>
                <a href=''  className={style.link}>NW</a>
                <a href='' className={style.link}>NW</a>
                <a href='' className={style.link}>NW</a>
            </div>
            <p className={style.text}>©2021г.</p>
        </div></div></div>
    )

}