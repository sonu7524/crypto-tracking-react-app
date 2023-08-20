import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css";

export default function PaginationComponent({page, handleChange}) {
    
  return (
    <div className='pagination-flex'>
      <Pagination count={10} variant="outlined" shape="rounded" page={page} onChange={(e, v)=> handleChange(e, v)}
        sx={{
            color: "var(--white)",
            "& .Mui-selected": {
                backgroundColor: "var(--purple) !important",
                color: "var(--white) !important",
                borderColor: "var(--purple) !important",
            },
            "& .MuiPaginationItem-ellipsis": {
                border: "0px !important",
            },
            "& .MuiPaginationItem-root": {
                color: "var(--white) !important",
                border: "1px solid var(--grey) !important",
            },

        }}
      />
    </div>
  );
}