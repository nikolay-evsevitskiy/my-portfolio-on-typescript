import React from "react";
import style from "./Skill.module.scss"
import ProgressBar from "../../Common/ProgressBar/ProgressBar";

type SkillPropsType = {
    title: string
    description: string
    styleComponent: {}
    percent: string
}


export const Skill: React.FC<SkillPropsType> = ({title, description, styleComponent, percent}) => {
    return <div className={style.skillBlock}>
        <div className={style.icon} style={styleComponent}/>
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}><ProgressBar percent={percent}/></div>

    </div>
}
