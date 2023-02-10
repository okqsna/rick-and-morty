import './Locations.css';
import Header from '../../Components/Header/Header';
import FiltersLocation from '../../Components/FiltersLocation/FiltersLocation.';
import PaginationPages from '../../Components/PaginationPages/PaginationPages';
import React, {useState, useEffect} from 'react';
const Locations=()=>{
    const [page, setPage]=useState(1);
    const [typeloc, setTypeloc]=useState('');
    const [dimension, setDimension]=useState('');
    const [name, setName]=useState('');
    const [receivedData, setReceivedData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    const {info, results}=receivedData;
    useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/location/?page=${page}&type=${typeloc}&dimension=${dimension}&name=${name}`)
    .then(response=>response.json())
    .then(data=>{
      setReceivedData(data);
      setLoading(false);
    })
    .catch((err)=>{
        setError(err)
    })
    }, [page, typeloc, dimension, name])
    return(
        <div className='Locations'>
             <Header/>
            <div className='content__Locations'>
            <h3>Locations</h3>
            <FiltersLocation typeloc={typeloc} setTypeloc={setTypeloc} dimension={dimension} setDimension={setDimension} name={name} setName={setName}/>
            {error ?
            <div className="err__Loc">
                <h3>404</h3>
                <p>There is no location with these characteristics</p>
            </div>:
            <>
              { loading ? <div className="loading__Chars">
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" width="40px" height='40px' alt="loading"></img>
            </div> :
            <>
            <div className='cards__content'>
            {
                results && results.map((location)=>{
                    return(
                    <div className='card__Locations' key={location.id}>
                    <div className="txt__card__Locations">
                        <p className='nameLocation'>{location.name}</p>
                        <p className='typeLocation'><span>type:</span> {location.type}</p>
                        <p className='dimensionLocation'><span>dimension:</span> {location.dimension}</p>
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
            </>
            }
           
         </div>
        </div>
    )
}
export default Locations;