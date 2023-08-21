import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';

export default function SelectGroup({priceType ,selectDataSet, handleSelectChange}) { 
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
        <InputLabel id="demo-simple-select-label">{priceType}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Days"
          onChange={handleSelectChange}
        >
          {selectDataSet.map((item, index) => <MenuItem key={index} value={item.value}>{item.label}</MenuItem>)}
        </Select>
        </FormControl>
    </div>
    
  );
}