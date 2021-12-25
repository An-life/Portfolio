import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../../Common/Styles/Container.module.scss';
import {Title} from '../Title/Title';
import TextField from '@mui/material/TextField';
import Fade from "react-reveal";

export const Contacts = () => {
    return (
        <div className={style.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title title={'Contact'}/>
            <Fade bottom>
            <form className={style.form}>
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