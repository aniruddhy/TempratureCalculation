import React, { useEffect } from "react";
import '../Style/Style1.css';
import { useState } from 'react';


function Tempapp(){
    const[city,setCity]= useState(null);
    const[search,setSearch]=useState('mumbai');
    useEffect(()=>{
        const fetchApi=async()=>{
       const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d0fe5a5eb1e6a2b0d1361621ffe6d95c`
       const response=await fetch(url);
       const resJsone=await response.json();
       console.log(resJsone);
       setCity(resJsone.main);
        }
        fetchApi();
    },[search])
return(
    <>
    <div className="box" >
        <div className="inputData">
        <input className="input" type="search"
       onChange={(event)=>setSearch(event.target.value)} value={search}></input>
        </div>

      
         {
            !city ? (
                <p className="error">Data Not Found</p>
            ):(
                <div>
                <div className="info">
                <h1 className="Location" >
                <i className="fas fa-street-view"></i>{search}</h1>
                <h1 className="temp">
                {city.temp}°C 
                </h1>  
                <h3 className="tempminMax">Min: {city.temp_min}°C  | Max: {city.temp}°C </h3> 
        </div>

       <div className="wave1"></div>
       <div className="wave2"></div>
       <div className="wave3"></div>
       </div>
            )
         }
       
        
     </div>

    </>
)
}
export default Tempapp;