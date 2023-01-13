import React from "react"
import Switch from '@mui/material/Switch';
import styles from "./index.module.css"
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import famousLogo from './famousLogo.svg'

export default function InputSwitch() {
    return (
        <div className={styles.famousBox}>
            <img className={styles.famousLogo} src={famousLogo}></img>
            <p>Famoso</p>
            <Switch {...label} defaultChecked />
        </div>
    );
}