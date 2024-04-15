import React from 'react';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import './fetchdata.css';
import Filter from './Filter';

const FetchData = () => {

    const [data, setdata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [region , setregion] = useState('');

    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setdata(data)
          setFilteredData(data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    useEffect(() => {
      
      let filtered = data.filter(item =>
          item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if(setregion !== ''){
        filtered = filtered.filter(item =>
          item.region.toLowerCase().includes(region.toLowerCase())
        )
      }
      setFilteredData(filtered);
  }, [data, searchQuery , region]);

    return (
      <>
      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} setregion={setregion} />
        <div className='container'>
          
            {
              filteredData.map((items , index)=> {
                return(
                  <>
                  <Link key={items.cca3} to={`/country/${items.cca3}`} className='link'>
                    <div className='container_countries'>
                      <img src={items.flags.png} alt={items.flags.alt} className='flags'  />
                      <div className='text'>
                        <h1 key={index}>{items.name.common}</h1>
                        <p><b>Population: </b> {items.population}</p>
                        <p><b>Regions:</b> {items.region}</p>
                        <p><b>Capital:</b> {items.capital}</p>
                      </div>
                    </div>
                    </Link>
                 
                  </>
                )
                
              })
            }
        </div>
        </>
    );
}

export default FetchData;