import React from "react";
import style from './MyWorks.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {MyWork} from "./MyWork/MyWork";

export const MyWorks = () => {
    return (
        <div className={style.myWorks}>
            <div className={styleContainer.container}>
                <div className={style.worksContainer}>
                    <h2 className={style.title}>Мои работы</h2>
                    <div className={style.links}>
                        <MyWork title={'Work'} text={'Discription'}/>
                        <MyWork title={'Work'} text={'Discription'}/>
                        <MyWork title={'Work'} text={'Discription'}/>
                        <MyWork title={'Work'} text={'Discription'}/>
                    </div>

                </div>
            </div>
        </div>
    )

}