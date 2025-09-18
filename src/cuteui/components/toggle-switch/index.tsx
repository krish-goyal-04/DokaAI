import React, { useState } from 'react';
import { ToggleButton as Button, ToggleButtonGroup, Typography } from '@mui/material';
import theme from '@/theme';

interface Button {
  value: string;
  label: string;
}

interface CustomToggleButtonGroupProps {
  buttons: Button[];
  defaultSelected?: string;
  onSelectedChange?: (value: string) => void;
}

export const ToggleButton: React.FC<CustomToggleButtonGroupProps> = ({
  buttons,
  defaultSelected,
  onSelectedChange
}) => {
  const [selected, setSelected] = useState(defaultSelected || buttons[0].value);

  const handleSelectionChange = (event: React.ChangeEvent<{}>, newSelection: string | null) => {
    if (newSelection !== null) {
      setSelected(newSelection);
      if (onSelectedChange) {
        onSelectedChange(newSelection);
      }
    }
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleSelectionChange}
      aria-label="button group"
      sx={{
        borderRadius: '6px',
        border: '1px solid var(--background-disabled)',
        height: '2.5rem',
        '& .MuiToggleButtonGroup-grouped': {
          margin: '4px',
          border: 0,
          borderRadius: '6px',
          height: '2rem',
        },
        '& .Mui-selected': {
            backgroundColor: `var(--primary-main) !important`,
            color: 'var(--text-hint) !important',
        },
      }}
    >
      {buttons.map((button) => (
        <Button
          key={button.value}
          value={button.value}
          aria-label={button.label}
          sx={{textTransform: 'none'}}
        >
            <Typography variant='bodyMedium'>
                {button.label}
            </Typography>
        </Button>
      ))}
    </ToggleButtonGroup>
  );
};

