import React from "react";
import style from './Contacts.module.css'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";

export const Contacts = () => {
    return <div className={style.ContactsBlock}>
        <div className={`${commonStyle.container} ${style.ContactsContainer}`}>
            <h3 className={style.title}>Contacts</h3>
            <form className={style.ContactsForm} action="">
                <input type="text"/>
                <input type="mail"/>
                <textarea className={style.blockTextArea}></textarea>
            </form>
            <Button title={"Send"} address={'#'}/>
        </div>
    </div>
}