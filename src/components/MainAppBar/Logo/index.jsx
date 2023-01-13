import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"
import logoImg from "@/assets/logo.svg"

const Logo = () => {
    return (
        <div className={styles.logoContainer}
            data-testid="logo">
            <Link to="/"
                style={{ textDecoration: "none" }}
            >
                <img className={styles.logo} src={logoImg} alt="logo" />
            </Link>
        </div>
    )
}

export default Logo