import style from "./navbar.module.scss"

const NavBar = () => {

    return(
        <nav className={style.navbar}>
            <img  className={style.navbar__logo} src="src/images/react.png" />
            <h3   className={style.navbar__logotext}>ReactFacts</h3>
            <h4   className={style.navbar__text}>React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar;