import './App.module.css';
import React from "react";
import {Header} from "./Components/Header/Header";
import {MainInformation} from "./Components/MainInformation/MainInformation";
import {Skills} from "./Components/Skills/Skills";
import {Footer} from "./Components/Footer/Footer";
import {Contacts} from "./Components/Contacts/Contacts";
import {MyWorks} from "./Components/MyWorks/MyWorks";
import style from './App.module.css'
import {Menu} from "./Components/Menu/Menu";
import {AboutMe} from "./Components/AboutMe/AboutMe";


function App() {
    return (
        <div className="App">
            <div className={style.header}>
            <Header/>
            </div>
            <div className={style.menu}>
                <Menu/>
            </div>
            <MainInformation/>
            <AboutMe/>
            <Skills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
