import React from "react";
import style from './IconButton.module.scss'

type IconButtonPropsType = {
    description: string
    imgAddress: string
    urlAddress: string

}

export const IconButton: React.FC<IconButtonPropsType> = ({description, imgAddress, urlAddress}) => {
    return <div>
        <a href={urlAddress}>
            <img src={imgAddress} alt={description} title={description} className={style.IconButtonBlock}/>
        </a>

    </div>
}
