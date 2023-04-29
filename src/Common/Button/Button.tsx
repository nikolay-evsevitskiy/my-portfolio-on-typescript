import React from "react";
import style from './Button.module.scss'
import Tilt from "react-parallax-tilt";

type ButtonPropsType = {
    title: string
    address: string
}

export const Button: React.FC<ButtonPropsType> = ({title, address}) => {
    return <Tilt scale={1.5}>
        <a className={style.buttonStyle} href={address}>
            {title}
        </a>
    </Tilt>

}
