import React from "react";
import './FilterEpisodes.css';

const FilterEpisodes=({epiName, setEpiName})=>{
    const handleChange=(event)=>{
        setEpiName(event.target.value);
    }
    return(
        <div className="FilterEpisodes">
             <div className="search__Epi">
                <input type="text" placeholder="type episode name"
                onChange={handleChange}
                value={epiName}
                ></input>
            </div>
        </div>
    )
}
export default FilterEpisodes;