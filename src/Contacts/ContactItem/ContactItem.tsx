import React from 'react';
import style from './ContactItem.module.scss'

type ContactItemType = {
    title: string
    description: string
    iconImg: {backgroundImage: string}
}

const ContactItem: React.FC<ContactItemType> = ({title, description, iconImg}) => {
    return (
        <div className={style.contactItem}>
            <div className={style.icon} style={iconImg}/>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ContactItem;
