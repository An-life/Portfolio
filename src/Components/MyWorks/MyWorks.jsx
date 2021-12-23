import React from "react";
import style from './MyWorks.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {MyWork} from "./MyWork/MyWork";
import {Title} from "../Title/Title";
import todolist from "./../../Assets/img/todolist.jpg"
import counter from "./../../Assets/img/counter.jpg"
import social from "./../../Assets/img/network.jpg"
import slider from "./../../Assets/img/slider.jpg"


export const MyWorks = () => {
    const todoStyle = {
        backgroundImage: `url(${todolist})`
    };
    const countStyle = {
        backgroundImage:`url(${counter})`
    };
    const netStyle = {
        backgroundImage:`url(${social})`
    };
    const slidStyle = {
        backgroundImage: `url(${slider})`
    };
    return (
        <div className={style.myWorks}>
            <div className={styleContainer.container}>
                <div className={style.worksContainer}>
                    <Title title={'My projects'}/>
                    <div className={style.links}>
                        <MyWork title={'ToDoList'}
                                style={todoStyle}
                                text={'React/Redux, TS, CSS, Unit Tests, RestAPI, Storybook'}
                                codeLink={'https://github.com/An-life/ToDoList'}
                                demoLink={'https://An-life.github.io/ToDoList'}/>
                        <MyWork title={'Counter'} text={'React, TS, CSS'}
                                style={countStyle}
                                codeLink={'https://github.com/An-life/Counter'}
                                demoLink={'https://an-life.github.io/Counter/'}/>
                        <MyWork title={'Slider'} text={'HTML, CSS, JS'}
                                style={slidStyle}
                                codeLink={'https://github.com/An-life/Slider'}
                                demoLink={'https://an-life.github.io/Slider/'} />
                        <MyWork title={'Network'} text={'React/Redux, TS, CSS, RestAPI,Thunk '}
                                style={netStyle}
                                codeLink={'https://github.com/An-life/Network'}
                                demoLink={'https://an-life.github.io/Network/'}/>
                    </div>

                </div>
            </div>
        </div>
    )

}