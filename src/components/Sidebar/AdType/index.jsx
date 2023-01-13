import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./index.module.css"
import adTypeLogo from './adTypeLogo.svg'
import NativeSelect from '@mui/material/NativeSelect';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AdType() {
    const [adType, setAdType] = React.useState('');

    const handleChange = (event) => {
        setAdType(event.target.value);
    };

    return (
        <Box className={styles.adTypeBox} sx={{ minWidth: 120 }}>
            <img className={styles.adTypeLogo} src={adTypeLogo}></img>
            <FormControl fullWidth>
                <Box>
                <InputLabel sx={{
                    fontSize: "30px",
                    color: "#A9A9A9",
                    fontWeight: 600,
                }} variant="standard" htmlFor="uncontrolled-native">
                    Tipo de anúncio
                </InputLabel>
                    <ArrowDropDownIcon sx={{
                        position: "absolute",
                        right: "0",
                    }} />
                </Box>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                        name: 'adType',
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
                    <option value={1}>Institucional</option>
                    <option value={2}>Produrejo</option>
                    <option value={3}>Produto</option>
                    <option value={4}>Varejo</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
