import React from "react";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const PaginationPages=({info, page, setPage})=>{
    const handleChange=(page)=>{
        setPage(page);
    }
    const theme = createTheme({
        palette: {
          blue: {
            main: '#00B5CE',
          },
        },
})
    return(
        <ThemeProvider theme={theme}>
        <Pagination count={info?.pages} shape="rounded" color="blue" defaultPage={1} onChange={(e)=>handleChange(e.target.textContent)}></Pagination>
        </ThemeProvider>
    
    )
}
export default PaginationPages;