import React from "react";
import style from "./MyProject.module.scss"
import {Button} from "../../Common/Button/Button";

type MyProjectPropsType = {
    title: string
    description: string
    styleImage?: {}
    urlAddress: string
}


export const MyProject: React.FC<MyProjectPropsType> = ({title, description, styleImage, urlAddress}) => {
    return <div className={style.MyProjectBlock}>
        <div className={style.image} style={styleImage}>
            <Button title={"Look"} address={urlAddress}/>
        </div>
        <h3 className={style.title}>{title}</h3>
        <div className={style.description}>{description}</div>
    </div>
}
