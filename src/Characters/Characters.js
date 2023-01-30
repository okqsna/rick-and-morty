import './Characters.css';

const Characters=({results})=>{
    return(
        <div className="Characters">
            {
                results && results.map((character)=>{
                    return(
                    <div className='card__Characters' key={character.id}>
                    <div className="img__card__Characters">
                        <img src={character.image} alt={character.name} width="160px" height="160px"></img>
                    </div>
                        <div className='txt__card__Characters'>
                            <p className='characterName'>{character.name}</p>
                            <p className='characterSpecies'>
                               <span>species:</span> {character.species}</p>
                            <p className='characterStatus' id="charStatus">
                                <span>status:</span>{character.status}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Characters;