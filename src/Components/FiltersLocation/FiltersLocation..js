import React from 'react';
import './FiltersLocation.css';
import TypeLocation from './TypeLocation/TypeLocation';
import DimensionLoc from './DimensionLoc/DimensionLoc';
const FiltersLocation=({typeloc, setTypeloc, dimension, setDimension})=>{
    return(
        <div className='FiltersLocation'>
            <TypeLocation typeloc={typeloc} setTypeloc={setTypeloc}/>
            <DimensionLoc dimension={dimension} setDimension={setDimension}/>
        </div>
    )
}
export default FiltersLocation;