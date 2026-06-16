import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import type { SxProps } from '@mui/material';
import type { Theme } from '@emotion/react';

type BtnType = {
    childName: string;
    sx?: SxProps<Theme>;
    onClick: () => void;
}

export default function Btn ({ childName, sx, onClick} : BtnType) {
    return (
        <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />}
            onClick={onClick}
            sx={sx}
        >
            {childName}
        </Button>
    )
}