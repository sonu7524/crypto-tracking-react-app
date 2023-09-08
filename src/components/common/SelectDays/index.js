import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import './style.css';

export default function SelectGroup({days, setDays}) { 
  const handleSelectChange = (event) => {
    setDays(event.target.value);
  };
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

          label="Days"
          value={days}
          onChange={handleSelectChange}
        >
          <MenuItem value={1}>24hrs</MenuItem>
          <MenuItem value={7}>7 days</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={60}>2 Months</MenuItem>
          <MenuItem value={90}>3 Months</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
          <MenuItem value={1095}>3 Years</MenuItem>
        </Select>
    </div>
    
  );
}