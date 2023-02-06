import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TypeLocation=({typeloc, setTypeloc,})=>{
    const locations=['Planet', 
    'Cluster', 
    'Space station',
    'Microverse',
    'TV',
    'Resort',
    'Fantasy town',
    'Dream'
];
    
    const handleChange = (event) => {
    setTypeloc(event.target.value);
    };

  return (
    <Box sx={{ width: 170, marginRight:5 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Locations</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Locations"
          onChange={handleChange}
          value={typeloc}
        >
            {
                locations && locations.map((item, index)=>{
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
export default TypeLocation;