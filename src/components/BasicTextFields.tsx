import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import type { ChangeEvent } from 'react';

type BasicTextFields = {
    nameText: string;
    valueText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicTextFields({nameText, valueText, onChange} : BasicTextFields) {
    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                name={nameText}
                value={valueText}
                onChange={onChange}
                id="outlined-basic" 
                label="할 일 입력 해주세요" 
                variant="outlined" 
            />

        </Box>
    );
}