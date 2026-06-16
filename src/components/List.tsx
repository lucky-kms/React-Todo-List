import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';
import ListItem from '@mui/material/ListItem';
// import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import type React from 'react';

type ListLineType = {
    primary: string,
    secondary: React.ReactNode,
    children: React.ReactNode,
    onClick?: () => void,
    sx?: SxProps<Theme>
}

export default function ListLine({primary, secondary, children, onClick, sx} : ListLineType) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={primary}
                    secondary={secondary}
                    onClick={onClick}
                    sx={sx}
                />

                {children}
            </ListItem>
        </>
        
    )
}