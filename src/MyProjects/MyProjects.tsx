import React from "react";
import style from "./MyProjects.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../Common/Components/Title/Title";
import todolistImage from "../assets/images/Todolist.png";
import socialNetImage from "../assets/images/SocialNetWork1.png";
import counterImage from "../assets/images/Counter.png";
import chessImage from "../assets/images/chess.png";
import easterImage from "../assets/images/easter.png";
// @ts-ignore
import Slide from 'react-reveal/Slide';

type MyProjectsDataType = {
    id: number
    tittle: string
    image: { backgroundImage: string }
    url: string
    description: string
}

export const MyProjects = () => {
    const myProjectsData: Array<MyProjectsDataType> = [
        {
            id: 1,
            tittle: "Todolist",
            description: "In this application, you can create various task lists, mark them as completed, sort and edit them",
            image: {backgroundImage: `url(${todolistImage})`},
            url: "https://nikolay-evsevitskiy.github.io/todolist/"
        },
        {
            id: 2,
            tittle: "Social network",
            description: "This is a social network application, implemented in React, Redux, TypeScript",
            image: {backgroundImage: `url(${socialNetImage})`},
            url: "https://nikolay-evsevitskiy.github.io/social-network"
        },
        {
            id: 3,
            tittle: "Counter",
            description: "This is a simple counter application",
            image: {backgroundImage: `url(${counterImage})`},
            url: "https://nikolay-evsevitskiy.github.io/Counter/"
        },
        {
            id: 4,
            tittle: "Chess",
            description: "Game of chess",
            image: {backgroundImage: `url(${chessImage})`},
            url: "https://nikolay-evsevitskiy.github.io/chess-on-react"
        },
        {
            id: 5,
            tittle: "Easter",
            description: "Single page site about easter story",
            image: {backgroundImage: `url(${easterImage})`},
            url: "https://new-life-church-baranovichi.github.io/easter2022"
        },

    ]

    return <div className={style.myProjectBlock} id={"projectsId"}>
        <div className={`${commonStyle.container} ${style.myProjectContainer}`}>
            <Title text={"My Projects"}/>
            <div className={style.myProjects}>
                <Slide right>
                    {myProjectsData.map(i => <MyProject key={i.id}
                                                        title={i.tittle}
                                                        description={i.description}
                                                        urlAddress={i.url}
                                                        styleImage={i.image}/>
                    )}

                </Slide>
            </div>
        </div>
    </div>
}
