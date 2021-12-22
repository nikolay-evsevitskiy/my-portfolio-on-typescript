import React from "react";
import style from "./Title.module.css"

type TitlePropsType = {
    text: string
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
    return <div className={style.title}>
        <h2>{text}</h2>
    </div>
}