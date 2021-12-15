import React from "react";
import style from './IconButton.module.css'

type IconButtonPropsType = {
    description: string
    urlAddress: string
}

export const IconButton: React.FC<IconButtonPropsType>= ({description,urlAddress}) => {
    return <div className={style.IconButtonBlock}>
        <img src={urlAddress} alt={description}/>
    </div>
}