import React from 'react'
import Logo from './Logo'
import PageTitle from './PageTitle'
import Profile from "./Profile"
import styles from "./style.module.css"

const MainAppBar = () => {
    return (
        <nav
            aria-label="navigation"
            className={styles.mainAppBar}
        >
            <Logo />
            <PageTitle />
            <Profile />
        </nav>
    )
}

export default MainAppBar