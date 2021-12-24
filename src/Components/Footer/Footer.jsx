import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../../Common/Styles/Container.module.css';
import gitHub from './../../Assets/Icons/github_git_icon_145985.svg';
import linkedin from './../../Assets/Icons/linkedin.svg';
import codewars from './../../Assets/Icons/codewars.svg';
import telegram from './../../Assets/Icons/telegram.svg';




export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={styleContainer.container}>
                <div className={style.container}>
                    <div className={style.links}>
                        <a href={'https://github.com/An-life'} className={style.link}><img src={gitHub} alt={'icon'}
                                                                                           width={40}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/anastasiya-ablavatskaya-13413b216/'}
                           className={style.link}><img src={linkedin} alt={'icon'} width={40}/></a>
                        <a href={'https://www.codewars.com/users/An-life'} className={style.link}>
                            <img src={codewars} alt={'icon'} width={40}/>
                        </a>
                        <a href={'https://t.me/anlife123'} className={style.link}><img src={telegram} alt={'icon'}
                                                                                           width={40}/>
                        </a>
                    </div>
                    <p className={style.text}>©2021</p>
                </div>
            </div>
        </div>
    )

}