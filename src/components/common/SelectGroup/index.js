import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';

export default function SelectGroup({selectDataSet, handleSelectChange}) { 
  return (
    <div className='select-group'>
        <p>Price change in last</p>
        <Select sx={{
            height: '2.5rem',
            color: 'var(--white)',
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root": {
                color: "var(--white)",
            },
            "&:focus": {
                "&& fieldset": {
                    borderColor: "var(--purple)",
                },
            },
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Days"
          onChange={handleSelectChange}
        >
          {selectDataSet.map((item, index) => <MenuItem key={index} value={item.value}>{item.label}</MenuItem>)}
        </Select>
    </div>
    
  );
}