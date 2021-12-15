import React from "react";
import style from "./MyProject.module.css"
import {Button} from "../../Common/Button/Button";

type MyProjectPropsType = {
    title: string
    description: string
}


export const MyProject: React.FC<MyProjectPropsType> = ({title, description}) => {
    return <div className={style.MyProjectBlock}>
        <div className={style.image}>
            <Button title={"Look"} address={'#'}/>
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>

    </div>
}