import React from 'react';
import './FiltersLocation.css';
import TypeLocation from './TypeLocation/TypeLocation';
import DimensionLoc from './DimensionLoc/DimensionLoc';
import NameLoc from './NameLoc/NameLoc';
const FiltersLocation=({typeloc, setTypeloc, dimension, setDimension, name, setName})=>{
    return(
        <div className='FiltersLocation'>
            <NameLoc name={name} setName={setName}/>
            <TypeLocation typeloc={typeloc} setTypeloc={setTypeloc}/>
            <DimensionLoc dimension={dimension} setDimension={setDimension}/>
        </div>
    )
}
export default FiltersLocation;