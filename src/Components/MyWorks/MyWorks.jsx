import React from 'react';

import style from './MyWorks.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {MyWork} from './MyWork/MyWork';
import {Title} from '../Title/Title';
import todolist from './../../Assets/img/todolist.jpg';
import counter from './../../Assets/img/counter.jpg';
import social from './../../Assets/img/network.jpg';
import slider from './../../Assets/img/slider.jpg';

export const MyWorks = () => {
    const todoStyle = {
        backgroundImage: `url(${todolist})`
    };
    const countStyle = {
        backgroundImage: `url(${counter})`
    };
    const netStyle = {
        backgroundImage: `url(${social})`
    };
    const slidStyle = {
        backgroundImage: `url(${slider})`
    };

    const networksData=[
        { title: 'Weather forecast', 
        style: todoStyle,
        text: 'React/Redux, TS, SCSS',
        codeLink: 'https://github.com/An-life/weather',
        demoLink: 'https://prismatic-heliotrope-a6b4ef.netlify.app/'}, 
        {title: 'Counter', style: 
        countStyle, text: 'React, TS, CSS',
        codeLink: 'https://github.com/An-life/Counter',
        demoLink: 'https://an-life.github.io/Counter/'
        },
        {title: 'Slider', 
        text: 'HTML, CSS, JS',
        style: slidStyle,
        codeLink:'https://github.com/An-life/Slider',
        demoLink: 'https://an-life.github.io/Slider/'
        },
        {title: 'Network',
        text: 'React/Redux, TS, CSS, RestAPI,Thunk ',
        style: netStyle,
        codeLink: 'https://github.com/An-life/Network',
        demoLink: 'https://an-life.github.io/Network/'
        }
      ]
    
    return (
        <div className={style.myWorks} id={'projects'}>
            <div className={styleContainer.container}>
                <div className={style.worksContainer}>
                    <Title title={'My projects'}/>
                    <div className={style.links}>
                        {networksData.map(data=> <MyWork title={data.title}
                            style={data.style}
                            text={data.text}
                            codeLink={data.codeLink}
                            demoLink={data.demoLink}/>
                            )
                            }
                    </div>
                </div>
            </div>
        </div>
    )

}