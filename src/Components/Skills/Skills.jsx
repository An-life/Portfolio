import React from "react";
import style from './Skills.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills} >
                    <Skill title={'JS'} discription={'Some text'}/>
                    <Skill title={'HTML'} discription={'Some text'}/>
                    <Skill title={'CSS'} discription={'Some text'}/>
                </div>
            </div>

        </div>
    )

}