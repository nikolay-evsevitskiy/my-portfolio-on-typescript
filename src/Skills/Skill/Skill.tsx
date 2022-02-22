import React from "react";
import style from "./Skill.module.scss"

type SkillPropsType = {
    title: string
    description: string
}


export const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return <div className={style.skillBlock}>
        <div className={style.icon}/>
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>{description}</span>

    </div>
}
