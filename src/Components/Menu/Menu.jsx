import React from "react";
import style from './Menu.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {MenuContent} from "./MenuContent/MenuContent";

export let Menu=()=>{


    return(<div>
            <div className={style.openButton} >
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}