import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DimensionLoc=({dimension, setDimension})=>{
    const dimensions=['Dimension C-137', 
    'Post-Apocalyptic Dimension', 
    'Replacement Dimension',
    'Cronenberg Dimension',
    'Fantasy Dimension',
    'Dimension 5-126',
    'Unknown'
];
    
    const handleChange = (event) => {
    setDimension(event.target.value);
    };

  return (
    <Box sx={{ width: 170, marginRight:5 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Dimension</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Dimension"
          onChange={handleChange}
          value={dimension}
        >
            {
                dimensions && dimensions.map((item, index)=>{
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
export default DimensionLoc;