import './Characters.css';
import Header from '../../Components/Header/Header';
import React, {useState, useEffect} from 'react';
import PaginationPages from '../../Components/PaginationPages/PaginationPages';
import Filters from '../../Components/Filters/Filters';
const Characters=()=>{
    const [page, setPage]=useState(1);
    const [status, setStatus]=useState("");
    const [gender, setGender]=useState("");
    const [species, setSpecies]=useState("");
    const [receivedData, setReceivedData]=useState([]);
    const [loading, setLoading]=useState(true);
    const {info, results}=receivedData;
    useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}&species=${species}`)
    .then(response=>response.json())
    .then(data=>{
      setReceivedData(data);
      setLoading(false);
      console.log(data);
    })
    }, [page, status, gender, species])

    return(
        <div className="Characters">
            <Header/>
            <div className='content__Char'>
            <h3>Characters</h3>
            <Filters status={status} setStatus={setStatus} gender={gender} setGender={setGender} species={species} setSpecies={setSpecies}/>
            { loading ? <div className="loading__Chars">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" width="40px" height='40px' alt="loading"></img>
            </div> :
            <>
            <div className='cards__content'>
            {
                results && results.map((character)=>{
                    return(
                    <div className='card__Characters' key={character.id}>
                    <div className="img__card__Characters">
                        <img src={character.image} alt={character.name} width="160px" height="180px"></img>
                    </div>
                        <div className='txt__card__Characters'>
                            <p className='characterName'>{character.name}</p>
                            <p className='characterSpecies'>
                               <span>species:</span> {character.species}</p>
                            <p className='characterStatus' id="charStatus">
                                <span>status:</span>{character.status}</p>
                            <p className='characterGender' id="charGender">
                                <span>gender:</span>{character.gender}</p>
                        </div>
                    </div>
                    )
                })
            }
            </div>
             <div className='pagination__Content'>
             <PaginationPages info={info} page={page} setPage={setPage}/>
             </div>
             </>
            }
            </div>
        </div>
    )

}
export default Characters;