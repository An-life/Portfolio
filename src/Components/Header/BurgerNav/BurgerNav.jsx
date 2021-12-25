import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimesCircle, faUser} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal";
import {Link} from "react-scroll";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";


export const BurgerNav = () => {
    let [open, setOpen] = useState(false)
    let openHandler = () => {
        setOpen(!open)
    }


    return (
        <div className={style.container}>
            <div onClick={openHandler} className={open === false ? style.openButton : style.closeButton}>
                <FontAwesomeIcon icon={faBars} className={style.icon}/></div>
            <div className={open === true ? style.menu : style.closeButton}>
                <Fade left>
                    <div onClick={openHandler} className={style.buttonToClose} ><FontAwesomeIcon icon={faTimesCircle} className={style.iconClose}/></div>
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
                        offset={1}
                        duration={500}
                    ><FontAwesomeIcon icon={faEnvelope}/> Contact</Link></div>
                </Fade>
            </div>
        </div>

    )

}