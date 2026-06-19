// import Paper from '@mui/material/Paper';
import type { Theme } from '@emotion/react';
import type { SxProps } from '@mui/material';
import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import type { column, row } from '@mui/material';

type FlexType =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

type StackLayoutType = {
    flexOptionXs? : FlexType;
    flexOptionSm? : FlexType;
    sx?: SxProps<Theme>;
    children : React.ReactNode;
}

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//         backgroundColor: '#1A2027',
//     }),
// }));


export default function StackLayout({flexOptionXs, flexOptionSm, sx, children} : StackLayoutType) {
    return (
        <div>
            <Stack
                direction={{ xs: flexOptionXs ?? 'column', sm: flexOptionSm ?? 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                sx={sx}
            >
                { children }
            </Stack>
        </div>
    );
}