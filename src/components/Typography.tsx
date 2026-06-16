import Typography from '@mui/material/Typography';
import type {SxProps, Theme} from '@mui/material';

type component = "span" | "div" | "p";

type variantOrder = "h1" | "h2" | "button" | "body2" | "button";

type TypographyType = {
    text: component,
    variantText: variantOrder,
    sx?: SxProps<Theme>,
    children : React.ReactNode;
}

export default function TypographyText({ text, variantText, sx, children } : TypographyType) {
    
    return (
        <Typography 
            component={text}
            variant={variantText}
            sx={sx}
        >
            { children }
        </Typography>
    )
}