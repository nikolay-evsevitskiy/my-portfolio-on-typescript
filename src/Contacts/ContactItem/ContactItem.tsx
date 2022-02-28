import React from 'react';
import style from './ContactItem.module.scss'

type ContactItemType = {
    title: string
    description: string
    iconImg: { backgroundImage: string }
}

const ContactItem: React.FC<ContactItemType> = ({title, description, iconImg}) => {
    return (
        <div className={style.contactItem}>
            <div className={style.icon} style={iconImg}/>
            <div>
                <h4>{title}</h4>
                <p>{title === 'CALL ME' ? <a href={`tel:${description}`}>{description}</a> :
                    <a href={`mailto:${description}`}>{description}</a>
                }</p>
            </div>
        </div>
    );
};

export default ContactItem;
