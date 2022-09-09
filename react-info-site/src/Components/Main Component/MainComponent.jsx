import style from "./maincomponent.module.scss"

const MainComponent = () => {

    return(
        <div className={style.maincomp}>
            <h1 className={style.maincomp__title}>Fun facts about React</h1>
            <ul className={style.maincomp__list}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default MainComponent;