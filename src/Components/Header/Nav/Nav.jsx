import style from './Nav.module.scss';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Fade from "react-reveal";
import {Link, animateScroll as scroll} from "react-scroll";


export const Nav = () => {
    return (
        <div className={style.nav}>
            <Fade top>
                <div className={style.linkContainer}><Link
                    activeClass={style.link}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><FontAwesomeIcon icon={faHome}/> Main</Link></div>
                <div className={style.linkContainer}><Link
                    activeClass={style.link}
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><FontAwesomeIcon icon={faUser}/> About me</Link></div>
                <div className={style.linkContainer}><Link
                    activeClass={style.link}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><FontAwesomeIcon icon={faLaptopCode}/> Skills</Link></div>
                <div className={style.linkContainer}><Link
                    activeClass={style.link}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><FontAwesomeIcon icon={faFolderOpen}/> Projects</Link></div>
                <div className={style.linkContainer}><Link
                    activeClass={style.link}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><FontAwesomeIcon icon={faEnvelope}/> Contact</Link></div>
            </Fade>
        </div>
    )
}