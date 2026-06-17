import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import type { SxProps } from '@mui/material';
import type { Theme } from '@emotion/react';
// import { type ChangeEvent } from 'react';

type BasicSelectType = {
    nameSelect: string;
    nameValue: string;
    sx: SxProps<Theme> ;
    onChange: (e: SelectChangeEvent) => void;
}

export default function BasicSelect({nameSelect, nameValue, sx, onChange} : BasicSelectType) {
    // const [item, setItem] = useState('1');

    // const handleChange = (event: SelectChangeEvent) => {
    //     setItem(event.target.value as string);
    // };

    return (
        <FormControl sx={sx}>
            <InputLabel id="demo-simple-select-label">우선순위 선택</InputLabel>
            <Select
                name={nameSelect}
                
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nameValue}
                label="우선순위 선택"
                onChange={onChange}
            >
                <MenuItem value={"1"}>쉬움</MenuItem>
                <MenuItem value={"2"}>보통</MenuItem>
                <MenuItem value={"3"}>어려움</MenuItem>
            </Select>
        </FormControl>
    );
}