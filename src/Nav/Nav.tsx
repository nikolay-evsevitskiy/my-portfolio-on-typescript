import React, {useState} from "react"
import style from "./Nav.module.scss"
import {Link} from "react-scroll";

type NavLinksType = {
    id: number
    tittle: string
    idLink: string
}
export const Nav = () => {
    const navLinks: Array<NavLinksType> = [
        {id: 1, tittle: "Main", idLink: "mainId"},
        {id: 2, tittle: "Skills", idLink: "skillsId"},
        {id: 3, tittle: "Projects", idLink: "projectsId"},
        {id: 4, tittle: "CV", idLink: "cvId"},
        {id: 5, tittle: "Contacts", idLink: "contactsId"}
    ]
    const [clickMenuButton, setClickMenuButton] = useState<boolean>(false)
    const clickedHandler = () => {
        setClickMenuButton(!clickMenuButton)
    }
    return <div className={style.nav}>
        <div className={style.rowMenu}>
            {navLinks.map(i => <Link key={i.id}
                                     spy={true}
                                     smooth={true}
                                     duration={500}
                                     style={{cursor: "pointer"}}
                                     to={i.idLink}>
                {i.tittle}
            </Link>)}
        </div>

        <div className={style.columMenu}>{clickMenuButton ?
            <><a href="#" className={style.icon} onClick={clickedHandler}>&#9776;</a>
                {navLinks.map(i => <Link
                    key={i.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    to={i.idLink}
                    style={{cursor: "pointer"}}
                >
                    {i.tittle}
                </Link>)}
            </> :
            <a href="#" className={style.icon} onClick={clickedHandler}>&#9776;</a>
        }</div>
    </div>

}
