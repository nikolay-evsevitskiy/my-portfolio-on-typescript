import React from "react";
import style from './Button.module.scss'

type ButtonPropsType = {
    title: string
    address: string
}

export const Button: React.FC<ButtonPropsType> = ({title, address}) => {
    return <a className={style.buttonStyle} href={address}>
        {title}
    </a>
}
