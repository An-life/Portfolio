import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Title} from '../Title/Title';
import TextField from '@mui/material/TextField';
import Fade from "react-reveal";
import emailjs from 'emailjs-com';

export const Contacts = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_5hpdlkp', 'template_rqps1es', e.currentTarget,
            'user_kiwnpiBAJHJH0k4HGGeb5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={style.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title title={'Contact'}/>
            <Fade bottom>
            <form className={style.form} onSubmit={sendEmail}>
                <TextField id="standard-basic" label="Your name" variant="standard" />
                <TextField id="standard-basic" label="Your email" variant="standard" />
                <TextField id="standard-basic" label="Your message" variant="standard" />
            </form>
            <button type={'submit'} className={style.button}>Send</button>
            </Fade>
            </div>
        </div>
    )

}