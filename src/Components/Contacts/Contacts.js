import React from "react";
import style from './Contacts.module.css';
import styleContainer from "../../Common/Styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Контакты</h2>
            <form className={style.form}>
                <input type='text' placeholder='Your name' className={style.input}/>
                <input type='email' placeholder='Your email' className={style.input}/>
                <textarea  placeholder='Your message' className={style.input}></textarea>
            </form>

            <button>Send</button>
            </div>

        </div>
    )

}