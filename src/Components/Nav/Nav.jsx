import style from './Nav.module.scss';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons/faLaptopCode';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href=''> <FontAwesomeIcon icon={faHome}/> Main</a>
            <a className={style.link} href=''><FontAwesomeIcon icon={faUser}/> About me</a>
            <a className={style.link} href=''><FontAwesomeIcon icon={faLaptopCode}/> Skills</a>
            <a className={style.link} href=''><FontAwesomeIcon icon={faFolderOpen}/> Projects</a>
            <a className={style.link} href=''><FontAwesomeIcon icon={faEnvelope}/> Contact</a>
        </div>
    )
}