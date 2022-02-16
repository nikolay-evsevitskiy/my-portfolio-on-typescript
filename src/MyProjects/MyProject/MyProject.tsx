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
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{description}</div>

    </div>
}