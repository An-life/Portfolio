import React from "react";
import style from './Skills.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";
import react from './../../Assets/Icons/reac.svg'
import redux from './../../Assets/Icons/redux.svg'
import js from './../../Assets/Icons/js.svg'
import ts from './../../Assets/Icons/ts.svg'


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills} >
                    <Skill title={'React'}  img={react}/>
                    <Skill title={'Redux'} img={redux}/>
                    <Skill title={'JS'} img={js} />
                    <Skill title={'TS'} img={ts} />
                    <Skill title={'JS'} img={js} />
                    <Skill title={'JS'} img={js} />
                    <Skill title={'JS'} img={js} />
                    <Skill title={'JS'} img={js} />
                    <Skill title={'JS'} img={js} />
                </div>
            </div>

        </div>
    )

}