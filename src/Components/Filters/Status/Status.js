import './Status.css';
import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Status=({status, setStatus})=>{
    const statuses=['alive', 'dead', 'unknown'];
    
    const handleChange = (event) => {
    setStatus(event.target.value);
    };

  return (
    <Box sx={{ width: 170, marginRight:5 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          onChange={handleChange}
          value={status}
        >
            {
                statuses && statuses.map((item, index)=>{
                    return(
                        <MenuItem value={item} key={index}>{item}</MenuItem>
                    ) 
              })
            }
        </Select>
      </FormControl>
    </Box>
  );
}
export default Status;