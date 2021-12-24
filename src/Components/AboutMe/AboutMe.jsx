import React from 'react';
import {Title} from '../Title/Title';
import style from './AboutMe.module.css'
import ava from './../../Assets/img/avatar.jpg'
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import telegram from "../../Assets/Icons/telegram.svg";
import {faBook, faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import gitHub from "../../Assets/Icons/github_git_icon_145985.svg";
import linkedin from "../../Assets/Icons/linkedin.svg";
import codewars from "../../Assets/Icons/codewars.svg";

export const AboutMe = () => {
    return (<div className={style.container}>
            <div><Title title={'About me'}/></div>
            <div className={style.wrapper}>
                <div><img src={ava} className={style.myPhoto} alt={'photo'}/></div>
                <div className={style.containerContact}>
                    <a href={''} className={style.link}><FontAwesomeIcon icon={faMapMarkerAlt}/> Minsk, Belarus</a>
                    <a href={''} className={style.link}><FontAwesomeIcon icon={faPhoneAlt}/>+375336778164</a>
                    <a href={''} className={style.link}><FontAwesomeIcon icon={faEnvelope}/>ablovatskaja@gmail.com</a>
                    <a href={''} className={style.link}><FontAwesomeIcon icon={faBook}/>English level:B1</a>

                </div>
                <div></div>

            </div>
            <div>
                <a href={'https://t.me/anlife123'}><img src={telegram} alt={'icon'} width={40} className={style.linkIcon}/></a>
                <a href={'https://github.com/An-life'} ><img src={gitHub} alt={'icon'}
                                                                                   width={40} className={style.linkIcon}/> </a>
                <a href={'https://www.linkedin.com/in/anastasiya-ablavatskaya-13413b216/'}>
                    <img src={linkedin} alt={'icon'} width={40} className={style.linkIcon}/></a>
                <a href={'https://www.codewars.com/users/An-life'}><img src={codewars}
                                               alt={'icon'}
                                               width={40} className={style.linkIcon}/></a>
            </div>
            <div className={style.text}> <p >I have experience with creating SPA using React, Redux, TypeScript, HTML, CSS.
                I am currently focused on improving my skills by using new technologies and tools.
                My hobbies are solving puzzles on Codewars, reading books about coding, and watching
                educational videos. I keep polishing up my English by using apps, reading articles and
                watching TV shows and series. I really enjoy learning something new.</p></div>


        </div>

    )
}