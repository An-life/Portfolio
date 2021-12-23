import React from "react";
import style from './Contacts.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";
import {Title} from "../Title/Title";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title title={'Contact'}/>
            <form className={style.form}>
                <input type='text' placeholder='Your name' className={style.input}/>
                <input type='email' placeholder='Your email' className={style.input}/>
                <textarea  placeholder='Your message' className={style.input}></textarea>
            </form>

            <button type={'submit'}>Send</button>
            </div>

        </div>
    )

}