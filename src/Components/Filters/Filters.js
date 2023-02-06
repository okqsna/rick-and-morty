import React from "react";
import Status from "./Status/Status";
import Gender from "./Gender/Gender";
import Species from "./Species/Species";
import './Filters.css';
const Filters=({status, setStatus, gender, setGender, species, setSpecies})=>{
    return(
       <div className="Filters">
        <Status status={status} setStatus={setStatus}/>
        <Gender gender={gender} setGender={setGender}/>
        <Species species={species} setSpecies={setSpecies}/>
       </div>
        
    )
}
export default Filters;