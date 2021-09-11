import './App.css';
import React from "react";
import {Header} from "./Components/Header/Header";
import {MainInformation} from "./Components/MainInformation/MainInformation";
import {Skills} from "./Components/Skills/Skills";
import {Footer} from "./Components/Footer/Footer";
import {Contacts} from "./Components/Contacts/Contacts";
import {Freelance} from "./Components/Freelans/Freelance";
import {MyWorks} from "./Components/MyWorks/MyWorks";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainInformation/>
            <Skills/>
            <MyWorks/>
            <Freelance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
