import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { fetchCoins } from "../../../functions/fetchCoins";
import './styles.css';

export default function SelectCoins({crypto1, crypto2, setCrypto1, setCrypto2}){
    let [coins, setCoins] = useState([]);


    useEffect(() => {
        getCoins();
    },[]);

    const getCoins = async () => {
        const myCoins = await fetchCoins();
        if(myCoins){
            setCoins(myCoins);
        }
    }

    const handleSelectChange = (event, isCoin2) => {
        if(isCoin2){
            setCrypto2(event.target.value);
        }else{
            setCrypto1(event.target.value);
        }
    }



    return(
        <div className="select-coins">
        <div className="select-coins1">
            <p>Crypto 1</p>
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
          value={crypto1}
          onChange={(event) => handleSelectChange(event, false)}
        >
          {coins.map((coin) => <MenuItem value={coin.id}>{coin.name}</MenuItem>)}
          </Select>
        </div>
          
          
        <div className="select-coins2">  

        <p>Crypto 2</p>
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
          value={crypto2}
          onChange={(event) => handleSelectChange(event, true)}
        >
          {coins.map((coin) => <MenuItem value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
        </div>
        </div>
    )

}