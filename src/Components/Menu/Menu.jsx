import React from 'react';
import style from './Menu.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

export let Menu = () => {
    return (<div>
            <div className={style.openButton}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </div>
    )
}