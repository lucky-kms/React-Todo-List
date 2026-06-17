import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import type { SxProps } from '@mui/material';
import type { Theme } from '@emotion/react';

type BtnType = {
    childName?: string;
    typeName?: string;
    iconName?: string;
    sx?: SxProps<Theme>;
    onClick?: () => void;
}

export default function Btn ({ childName, typeName, iconName, sx, onClick} : BtnType) {
    return (

        typeName === "submit" ?

        <Button
            type={typeName}
            variant="contained"
            color="primary"
            startIcon={''}
            sx={sx}
        >
            {childName}
        </Button>
        :
        <Button 
            variant="outlined" 
            startIcon={iconName === "delType"?<DeleteIcon /> : <SendIcon />}
            onClick={onClick}
            sx={sx}
        >
            {childName}
        </Button>
    )
}