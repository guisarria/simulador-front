import { CircularProgress } from "@mui/material"
import React from "react"

import styles from "./style.module.css"

const Progress = () => {
    return (
        <div className={styles.progress}>
            <CircularProgress />
        </div>
    )
}

export default Progress