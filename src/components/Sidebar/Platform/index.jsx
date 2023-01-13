import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styles from "./index.module.css"
import platformLogo from './platformLogo.svg'
import NativeSelect from '@mui/material/NativeSelect';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Platform() {
    const [platform, setPlatform] = React.useState('');

    const handleChange = (event) => {
        setPlatform(event.target.value);
    };

    return (
        <Box className={styles.platformBox} sx={{ minWidth: 120 }}>
            <img className={styles.platformLogo} src={platformLogo}></img>
            <FormControl fullWidth>
                <Box>
                <InputLabel sx={{
                    fontSize: "30px",
                    color: "#A9A9A9",
                    fontWeight: 600,
                }} variant="standard" htmlFor="uncontrolled-native">
                    Plataforma
                </InputLabel>
                    <ArrowDropDownIcon sx={{
                        position: "absolute",
                        right: "0",
                    }} />
                </Box>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                        name: 'adTheme',
                        id: 'uncontrolled-native',
                    }}
                    sx={{
                        border: "none",
                        marginTop: "25px",
                        marginLeft: "2px",
                        color: "#A8ACB1",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        ":before": {
                            border: "none"
                        },
                        ".MuiNativeSelect-icon": {
                            display: "none"
                        }
                    }}
                >
                    <option value={1}>Facebook</option>
                    <option value={2}>Instagram</option>
                    <option value={3}>TikTok</option>
                    <option value={4}>Twitter</option>
                    <option value={5}>YouTube</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
