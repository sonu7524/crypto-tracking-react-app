import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGroup({priceType ,days, handleSelectChange}) {

  return (
    <div className='select-group'>
        <FormControl sx={{
            backgroundColor: "transparent",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
            '& .MuiInputBase-root': {
                color: "var(--grey)",
                fontSize: "0.8rem",
            },
            '& .MuiInputLabel-root': {
                color: "var(--grey)",
                fontSize: "0.8rem",
            },
            '& .MuiSelect-root': {
                color: "var(--grey)",
                fontSize: "0.8rem",
            },
            '& .MuiSelect-icon': {
                color: "var(--grey)",
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: "var(--grey)",
                },
                '&:hover fieldset': {
                    borderColor: "var(--grey)",
                },
                '&.Mui-focused fieldset': {
                    borderColor: "var(--grey)",
                },
            },
        }} >
        <InputLabel id="demo-simple-select-label">Price in </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleSelectChange}
        >
          <MenuItem value={1}>24hrs</MenuItem>
          <MenuItem  value={7}>7 days</MenuItem>
          <MenuItem  value={30}>30 days</MenuItem>
          <MenuItem value={90}>3 Months</MenuItem>
          <MenuItem  value={365}>1 year</MenuItem>
        </Select>
        </FormControl>
    </div>
  );
}