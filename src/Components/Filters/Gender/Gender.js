import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Gender=({gender, setGender})=>{
    const genders=['female', 'male', 'unknown'];
    
    const handleChange = (event) => {
    setGender(event.target.value);
    };

  return (
    <Box sx={{ width: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          onChange={handleChange}
          value={gender}
        >
            {
                genders && genders.map((item, index)=>{
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
export default Gender;