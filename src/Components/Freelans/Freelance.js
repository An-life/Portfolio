import React from "react";
import style from './Freelance.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";

export const Freelance = () => {
    return (
        <div className={style.freelance}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button>Нанять меня</button>
            </div>

        </div>
    )

}