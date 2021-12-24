import React from "react";
import style from './Contacts.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {Title} from "../Title/Title";
import TextField from "@mui/material/TextField";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title title={'Contact'}/>
            <form className={style.form}>
                <TextField id="standard-basic" label="Your name" variant="standard" />
                <TextField id="standard-basic" label="Your email" variant="standard" />
                <TextField id="standard-basic" label="Your message" variant="standard" />
            </form>

            <button type={'submit'}>Send</button>
            </div>

        </div>
    )

}