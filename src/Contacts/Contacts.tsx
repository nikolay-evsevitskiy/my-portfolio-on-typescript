import React from "react";
import style from './Contacts.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";

export const Contacts = () => {
    return <div className={style.ContactsBlock}>
        <div className={`${commonStyle.container} ${style.ContactsContainer}`}>
           <Title text={'Contacts'} />
            <form className={style.ContactsForm} action="">
                <input type="text"/>
                <input type="mail"/>
                <textarea />
            </form>
            <Button title={"Send"} address={'#'}/>
        </div>
    </div>
}
