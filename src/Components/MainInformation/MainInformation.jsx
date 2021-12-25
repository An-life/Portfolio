import React from 'react';
import style from './MainInformation.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 7,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }


}

export const MainInformation = () => {
    return (
        <div><Particles className={style.particles} params={particlesOpt}/>
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