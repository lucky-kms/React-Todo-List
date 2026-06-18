import Checkbox from '@mui/material/Checkbox';

type CheckBoxesType = {
    checked: boolean;
    onClick: () => void;
}

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function Checkboxes({ checked, onClick } : CheckBoxesType) {
    return (
        <div>
            <Checkbox 
                {...label}
                checked={checked}
                onClick={onClick} />
        </div>
    );
}