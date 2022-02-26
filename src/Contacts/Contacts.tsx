import React from "react";
import style from './Contacts.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";

export const Contacts = () => {
    return <div className={style.ContactsBlock} id={"contactsId"}>
        <div className={`${commonStyle.container} ${style.ContactsContainer}`}>
           <Title text={'Contacts'} />
            <form className={style.ContactsForm} action="">
                <input type="text" placeholder={"YOUR NAME"} />
                <input type="email" placeholder={"YOUR EMAIL"}/>
                <input type="text" placeholder={"YOUR SUBJECT"}/>
                <textarea placeholder={"YOUR MESSAGE"}/>
            </form>
            <Button title={"Send"} address={'#'}/>
        </div>
    </div>
}
