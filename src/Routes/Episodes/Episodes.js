import './Episodes.css';
import Header from '../../Components/Header/Header';
import PaginationPages from '../../Components/PaginationPages/PaginationPages';
import React, {useState, useEffect} from 'react';

const Episodes=()=>{
    const [page, setPage]=useState(1);
    const [receivedData, setReceivedData]=useState([]);
    const [loading, setLoading]=useState(true);
    const {info, results}=receivedData;
    useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`)
    .then(response=>response.json())
    .then(data=>{
      setReceivedData(data);
      setLoading(false);
      console.log(data);
    })
    }, [page])
    return(
        <div className="Episodes">
            <Header/>
            <div className='content__Episodes'>
            <h3>Episodes</h3>
            { loading ? <div className="loading__Chars">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" width="40px" height='40px' alt="loading"></img>
            </div> :
            <>
            <div className='cards__content'>
            {
                results && results.map((episode)=>{
                    return(
                    <div className='card__Episodes' key={episode.id}>
                    <div className="txt__card__Episodes">
                        <p className='nameEpisode'>{episode.name}</p>
                        <p className='typeEpisode'><span>episode:</span> {episode.episode}</p>
                        <p className='dimensionEpisode'><span>date:</span> {episode.air_date}</p>
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
export default Episodes;