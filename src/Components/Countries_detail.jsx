import React from 'react';
import { useParams , Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import './details.css';
import Nav from './Nav';


const CountriesDetail = () => {
    const { id } = useParams();
    const [data , setdata] = useState([]);
    
    

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        .then((res) => res.json())
        .then((data)=>{
            console.log(data)

            
            setdata(data);
        })
    },[id])

    

   

  
    
    return (
        <div >
            <Nav/>
            <div className='back'>
            <Link to="/"><button><i class="uil uil-arrow-left"></i>Back</button></Link>
            </div>
            <div className='details'> 
                {
                    data.map((items , index) => {
                        return(
                            <>
                           
                            <div className='Flags'>
                                <img src={items.flags.png} alt={items.flags.alt}  className='soloimg'/>
                            </div>
                            <div className='textdetail'>
                                <h1  className='head'>{items.name.common}</h1>
                                <div className='info'>
                                    <div className='sec1'>
                                    <p><b>Native Name:</b> {items.name.official}</p>
                                    <p><b>Population:</b> {items.population}</p>
                                    <p><b>Region:</b> {items.region}</p>
                                    <p><b>Sub Region:</b> {items.subregion}</p>
                                    <p><b>Capital:</b> {items.capital}</p>
                                    </div>
                                    <div className='sec2'>
                                    <p><b>Top Level domain:</b> {items.tld}</p>
                                    <p><b>Currencies:</b> {Object.values(items.currencies).map(currency => <span key={currency.name}>{currency.name}</span>)}</p>
                                    <p><b>Languages:</b> {Object.entries(items.languages).map(([code, name]) => {return ( <span key={code}>{name}  </span>)})}</p>
                                    </div>
                                </div>
                                <div className='borders'>
                                    <p><b>Border Countries:</b></p>
                                    <div className='buttonsborders'>
                                        {
                                            items.borders && items.borders.length > 0 ? ( items.borders.map((code , index) => {
                                                return(
                                                    <Link key={index} to={`/country/${code}`} className='link'><button className='borderbutton' key={index}>{code}</button></Link>
                                                );
                                            })) : (
                                                <p>No bordering countries</p>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                            </>
                        );
                    })
                }
                
            </div>

        </div>
    );
}

export default CountriesDetail;
