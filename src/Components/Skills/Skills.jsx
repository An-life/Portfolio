import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Skill} from './Skill/Skill';
import {Title} from '../Title/Title';
import react from './../../Assets/Icons/reac.svg';
import redux from './../../Assets/Icons/redux.svg';
import js from './../../Assets/Icons/js.svg';
import ts from './../../Assets/Icons/ts.svg'
import html from './../../Assets/Icons/html.svg';
import css from './../../Assets/Icons/css.svg';
import git from './../../Assets/Icons/git.svg';
import jest from './../../Assets/Icons/jest.svg';
import material from './../../Assets/Icons/material_ui.svg';
import storybook from './../../Assets/Icons/storybook.svg';
import sass from './../../Assets/Icons/sass.svg';
import figma from './../../Assets/Icons/figma.svg';
import Fade from "react-reveal";

export const Skills = () => {
    return (
        <div>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <Fade bottom>
                <div className={style.skills}>
                    <Skill title={'JS'} img={js}/>
                    <Skill title={'TS'} img={ts}/>
                    <Skill title={'HTML'} img={html}/>
                    <Skill title={'React'} img={react}/>
                    <Skill title={'Redux'} img={redux}/>
                    <Skill title={'CSS'} img={css}/>
                    <Skill title={'SASS'} img={sass}/>
                    <Skill title={'Material UI'} img={material}/>
                    <Skill title={'FIGMA'} img={figma}/>
                    <Skill title={'Git'} img={git}/>
                    <Skill title={'Storybook'} img={storybook}/>
                    <Skill title={'Jest'} img={jest}/>
                </div>
                </Fade>
            </div>

        </div>
    )

}