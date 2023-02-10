import React from "react";
import './NameLoc.css';

const NameLoc=({name, setName})=>{
    const handleChange=(event)=>{
        setName(event.target.value);
    }
    return(
        <div className="NameLoc">
             <div className="search__Loc">
                <input type="text" placeholder="type location name"
                onChange={handleChange}
                value={name}
                ></input>
            </div>
        </div>
    )
}
export default NameLoc;