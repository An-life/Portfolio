import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import gitHub from './../../Assets/Icons/github_git_icon_145985.svg';
import linkedin from './../../Assets/Icons/linkedin.svg';
import codewars from './../../Assets/Icons/codewars.svg';
import telegram from './../../Assets/Icons/telegram.svg';
import Fade from "react-reveal";
import { linksDataItems } from '../../Constants/constants';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <Fade top>
                <div className={styleContainer.container}>
                    <div className={style.container}>
                        <div className={style.links}>
                            {linksDataItems.map(item=> <a href={item.link} className={style.link}>
                                <img src={item.icon} alt={'icon'} width={40}/>
                            </a>
                            )
                            }
                        </div>
                        <p className={style.text}>©2021</p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
