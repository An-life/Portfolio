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
import Tilt from "react-tilt";

export const Skills = () => {
    return (
        <div>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}id={'skills'}>
                <Title title={'Skills'}/>
                <Fade bottom>
                    <div className={style.skills}>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'JS'} img={js}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}> <Skill title={'TS'} img={ts}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'HTML'} img={html}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'React'} img={react}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'Redux'} img={redux}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'CSS'} img={css}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}> <Skill title={'SASS'} img={sass}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'Material UI'} img={material}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}><Skill title={'FIGMA'} img={figma}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}> <Skill title={'Git'} img={git}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}> <Skill title={'Storybook'} img={storybook}/></Tilt>
                        <Tilt className="Tilt" options={{max: 25}}> <Skill title={'Jest'} img={jest}/></Tilt>
                    </div>
                </Fade>
            </div>

        </div>
    )

}