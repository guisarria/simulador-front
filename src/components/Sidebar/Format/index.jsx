import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./index.module.css"
import formatLogo from './formatLogo.svg'
import NativeSelect from '@mui/material/NativeSelect';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Format() {
    const [format, setFormat] = React.useState('');

    const handleChange = (event) => {
        setFormat(event.target.value);
    };

    return (
        <Box className={styles.formatBox} sx={{ minWidth: 120 }}>
            <img className={styles.formatLogo} src={formatLogo}></img>
             <FormControl fullWidth>
                <Box>
                <InputLabel sx={{
                    fontSize: "30px",
                    color: "#A9A9A9",
                    fontWeight: 600,
                }} variant="standard" htmlFor="uncontrolled-native">
                    Formato
                </InputLabel>
                    <ArrowDropDownIcon sx={{
                        position: "absolute",
                        right: "0",
                    }} />
                </Box>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                        name: 'adThype',
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
                    <option value={1}>Carrossel</option>
                    <option value={2}>Gif</option>
                    <option value={3}>Imagem única</option>
                    <option value={4}>Texto</option>
                    <option value={5}>Vídeo curto</option>
                    <option value={6}>Vídeo longo</option>
                </NativeSelect>
            </FormControl>
        </Box >
    );
}
