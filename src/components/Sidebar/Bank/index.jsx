import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import styles from "./index.module.css"
import bankLogo from './bankLogo.svg'
import NativeSelect from '@mui/material/NativeSelect';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Bank() {
    const [bank, setBank] = React.useState('');

    const handleChange = (event) => {
        setBank(event.target.value);
    };

    return (
        <Box className={styles.bankBox} sx={{ minWidth: 120 }}>
            <img className={styles.bankLogo} src={bankLogo}></img>
             <FormControl fullWidth>
                <Box>
                <InputLabel sx={{
                    fontSize: "30px",
                    color: "#A9A9A9",
                    fontWeight: 600,
                }} variant="standard" htmlFor="uncontrolled-native">
                    Banco
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
                    <option value={1}>Banco do Brasil</option>
                    <option value={2}>Banco Inter</option>
                    <option value={3}>BMG</option>
                    <option value={4}>Bradesco</option>
                    <option value={5}>C6 Bank</option>
                    <option value={6}>Caixa</option>
                    <option value={7}>Itaú</option>
                    <option value={8}>Next</option>
                    <option value={9}>Nubank</option>
                    <option value={10}>Santander</option>
                </NativeSelect>
            </FormControl>
        </Box >
    )
}
