import React from 'react';

import {Title} from '../Title/Title';
import style from './AboutMe.module.scss'
import ava from './../../Assets/img/avatar.jpg'
import telegram from '../../Assets/Icons/telegram.svg';
import {faBook, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import gitHub from '../../Assets/Icons/github_git_icon_145985.svg';
import linkedin from '../../Assets/Icons/linkedin.svg';
import codewars from '../../Assets/Icons/codewars.svg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import Fade from 'react-reveal';

export const AboutMe = () => {
 const contactsDataItems = [
   {icon: faMapMarkerAlt, data: 'Minsk, Belarus'},
   {icon: faPhoneAlt, data: '+375336778164'},
   {icon: faEnvelope, data: 'ablovatskaja@gmail.com'},
   {icon: faBook, data: 'English level:B1'}
 ];

 const linksDataItems = [
     {link: 'https://t.me/anlife123', icon: telegram},
     {link: 'https://github.com/An-life', icon: gitHub},
     {link: 'https://www.linkedin.com/in/anastasiya-ablavatskaya-13413b216/', icon: linkedin},
     {link: 'https://www.codewars.com/users/An-life', icon: codewars},
    ]

    return (<div className={style.container} id={'aboutMe'}>
            <div><Title title={'About me'}/></div>
            <div className={style.wrapper}>
                <Fade left>
                    <div className={style.containerPhoto}>
                        <img src={ava} className={style.myPhoto} alt={'photo'}/>
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.containerContact}>
                        {contactsDataItems.map(item=> <a href={''} className={style.link}>
                            <FontAwesomeIcon icon={item.icon}/> {item.data}
                            </a>)}
                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className={style.containerLink}>
                    {linksDataItems.map(item=> <a href={item.link}><img src={item.icon} alt={'icon'} width={40}
                                                            className={style.linkIcon}/></a>)}
                </div>
                <div className={style.text}><p>I have experience with creating SPA using React, Redux, TypeScript, HTML,
                    CSS.
                    I am currently focused on improving my skills by using new technologies and tools.
                    My hobbies are solving puzzles on Codewars, reading books about coding, and watching
                    educational videos. I keep polishing up my English by using apps, reading articles and
                    watching TV shows and series. I really enjoy learning something new.</p></div>
            </Fade>
        </div>
    )
}