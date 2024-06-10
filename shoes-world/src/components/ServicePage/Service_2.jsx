import { useState } from "react";
import './Service_2.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
export default function Service_2(){
    const value = 4.5;
    return(
        <>
        <div className="sec2-main">
                <h2>Customer Reviews</h2>
               <div className="Review-blocks">
               <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
            <div class="vl"></div>
            <div className="Review-block-2">
               
            <Stack spacing={1}>
      <Rating name="size-small" defaultValue={5} size="small" />
      <Rating name="size-small" defaultValue={4} size="small" />
      <Rating name="size-small" defaultValue={3} size="small" />
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-small" defaultValue={1} size="small" />
        </Stack>
              </div>
              <div class="vl"></div>
              <div className="Review-block-3">
                <form action="" method="post" className="form-review"> 
                    <textarea name="review" id="review" placeholder="Write Your Review" ></textarea><br></br>
                    <br></br>
                    <button>Post Review</button>
                </form>
              </div>
               </div>
            </div>
        </>
    );
}