import React from 'react';

import style from './MainInformation.module.scss';
import {particlesOpt} from './../MainInformation/constants';

import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

export const MainInformation = () => {
    return (
        <div id={'main'}><Particles className={style.particles} params={particlesOpt}/>
            <div className={style.mainInf}>
                <div className={style.content}><h1>ANASTASIYA ABLAVATSKAYA</h1></div>
                <div className={style.content}>
                    <ReactTypingEffect
                        text={['Hello.', 'I am a front-end developer.']}
                    />
                </div>
            </div>
        </div>
    )
}