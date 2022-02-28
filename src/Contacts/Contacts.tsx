import React from "react";
import style from './Contacts.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";
import ContactItem from "./ContactItem/ContactItem";
import callImage from "../assets/images/call.png";
import mailImage from "../assets/images/mail.png";

type ContactItemInfoType = {
    id: number
    tittle: string
    description: string
    iconImg: { backgroundImage: string }

}

export const Contacts = () => {
    const contactItemInfo: Array<ContactItemInfoType> = [
        {
            id: 1,
            tittle: 'MAIL ME',
            description: 'nikolay.evsevitskiy@gmail.com',
            iconImg: {backgroundImage: `url(${mailImage})`}
        },
        {
            id: 2,
            tittle: 'CALL ME',
            description: '+375 (33) 699 02 87',
            iconImg: {backgroundImage: `url(${callImage})`}
        }
    ]
    return <div className={style.ContactsBlock} id={"contactsId"}>
        <div className={`${commonStyle.container} ${style.ContactsContainer}`}>
            <Title text={'Contacts'}/>
            <div className={style.mainBlock}>
                <div className={style.myContactsBlock}>
                    <h3>DON'T BE SHY!</h3>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
                        opportunities to be part of your visions.</p>
                    {contactItemInfo.map(i => <ContactItem key={i.id}
                                                           title={i.tittle}
                                                           description={i.description}
                                                           iconImg={i.iconImg}/>
                    )}
                </div>
                <form className={style.ContactsForm} action="">
                    <input type="text" placeholder={"YOUR NAME"}/>
                    <input type="email" placeholder={"YOUR EMAIL"}/>
                    <input type="text" placeholder={"YOUR SUBJECT"}/>
                    <textarea placeholder={"YOUR MESSAGE"}/>
                    <Button title={"Send"} address={'#'}/>
                </form>

            </div>

        </div>
    </div>
}
