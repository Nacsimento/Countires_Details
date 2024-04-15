import React from 'react';
import './Filter.css';


const Filter = ({searchQuery, setSearchQuery , setregion}) => {

    

    
        const changedata = (e) => {
            setSearchQuery(e.target.value)
            
        }
        
        const regionchange = (e) => {
            setregion(e.target.value)
        }

    

    return (
        <>
            <div className='container_filter'>
                <div className='input'>
                    <input type="text" value={searchQuery} onChange={changedata} className='in' placeholder='Search for a country...' />
                </div>
                <div className='drop'>
                    <select name="Regioans" id="RG" onChange={regionchange}>
                        <option value="">Filter By region</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default Filter;
