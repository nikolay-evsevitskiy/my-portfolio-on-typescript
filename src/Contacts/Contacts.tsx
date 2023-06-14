import React, {useState} from "react";
import style from './Contacts.module.scss'
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";
import ContactItem from "./ContactItem/ContactItem";
import callImage from "../assets/images/call.png";
import mailImage from "../assets/images/mail.png";
// @ts-ignore
import Slide from 'react-reveal/Slide';
import * as emailjs from 'emailjs-com';
import Loader from "../Common/Loader/Loader";
import s from "../Common/Button/Button.module.scss"
import axios from "axios";


type ContactItemInfoType = {
    id: number
    tittle: string
    description: string
    iconImg: { backgroundImage: string }

}
type ToSendType = {
    from_name: string
    reply_to: string
    your_subject: string
    message: string
}

export const Contacts = () => {
    const contactItemInfo: Array<ContactItemInfoType> = [
        {
            id: 1,
            tittle: 'MAIL ME',
            description: 'nikolay.evsevitski.work@gmail.com',
            iconImg: {backgroundImage: `url(${mailImage})`}
        },
        {
            id: 2,
            tittle: 'CALL ME',
            description: '698 214 434',
            iconImg: {backgroundImage: `url(${callImage})`}
        }
    ]
    const [loader, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [toSend, setToSend] = useState<ToSendType>({
        from_name: '',
        reply_to: '',
        your_subject: '',
        message: ''
    })
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true)
        if (toSend.from_name.trim() === '') {
            setError('Name is required!')
            setLoader(false)
        } else if (toSend.reply_to.trim() === '') {
            setError('Email is required!')
            setLoader(false)
        } else if (toSend.message.trim() === '') {
            setError('Message is required!')
            setLoader(false)
        } else {
            //axios.post('http://localhost:3010/',toSend)
            emailjs.sendForm('service_q6pvry9', 'template_tjhsx3w', e.currentTarget,
                'QQlqwWjjylC1I0nAX')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        setError(error.text);
                    }
                )
                .catch(err => {
                    setError(err)
                })
                .finally(() => {
                    setLoader(false)
                })
            e.currentTarget.reset()
        }

    }
    const handleChange = (e: any) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }
    return <div className={style.ContactsBlock} id={"contactsId"}>
        <div className={`${commonStyle.container} ${style.ContactsContainer}`}>
            <Title text={'Contacts'}/>
            <div className={style.mainBlock}>
                <Slide right>
                    <div className={style.myContactsBlock}>
                        <h3>DON'T BE SHY!</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas or
                            opportunities to be part of your visions.</p>
                        {contactItemInfo.map(i => <ContactItem key={i.id}
                                                               title={i.tittle}
                                                               description={i.description}
                                                               iconImg={i.iconImg}/>
                        )}
                    </div>
                </Slide>
                <Slide left>
                    <form className={style.ContactsForm} onSubmit={sendEmail} action="">
                        <input type="text"
                               name="from_name"
                               value={toSend.from_name}
                               onChange={handleChange}
                               placeholder={"YOUR NAME"}/>

                        <input type="email"
                               name="reply_to"
                               value={toSend.reply_to}
                               onChange={handleChange}
                               placeholder={"YOUR EMAIL"}/>

                        <input type="text"
                               name="your_subject"
                               value={toSend.your_subject}
                               onChange={handleChange}
                               placeholder={"YOUR SUBJECT"}/>

                        <textarea
                            name="message"
                            value={toSend.message}
                            onChange={handleChange}
                            placeholder={"YOUR MESSAGE"}/>

                        {loader ? <Loader/> : <button className={s.buttonStyle} type="submit">Send</button>}
                        {error && <div style={{color: 'red'}}>{error}</div>}

                    </form>

                </Slide>

            </div>

        </div>
    </div>
}
