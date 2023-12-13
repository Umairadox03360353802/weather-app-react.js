import React from 'react'
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import search_icon from '../Assets/search.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import './wheather-appcss.css'
import { useState } from 'react';
import axios from 'axios';

function WheatherApp() {
    const api_Key="840945b9f63450d44f0020ad0a2435d9";
    const[Wicon,setWicon]=useState(cloud_icon)
    
   async function  search() {
      const element=document.getElementsByClassName('cityInput')
       if(element[0].value==="") {return 0}
       //   console.log(element[0].value)
         let Url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_Key}`
         
          let Data=await axios.get(Url).then((Data)=>{return Data.data})
       //  let reponse= await fetch(Url)
       //  let data= await reponse.json()
     
      const humidity=document.getElementsByClassName("humidity-percent")
      const wind=document.getElementsByClassName("wind-rate")
      const temperature=document.getElementsByClassName("weather-temperature")
      const location=document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=Data.main.humidity+'%';
      wind[0].innerHTML=Math.floor(Data.wind.speed)+'km/h';
      temperature[0].innerHTML=Math.floor(Data.main.temp)+'°C';
      location[0].innerHTML=Data.name;


      if (Data.weather[0].icon==='01d' ||Data.weather[0].icon==='01n') {
        setWicon(clear_icon)
      }
      else if(Data.weather[0].icon==='02d' ||Data.weather[0].icon==='02n') {
        setWicon(cloud_icon)
      }
      else if(Data.weather[0].icon==='03d' ||Data.weather[0].icon==='03n') {
        setWicon(drizzle_icon)
      }
      else if(Data.weather[0].icon==='04d' ||Data.weather[0].icon==='04n') {
        setWicon(drizzle_icon)
      }
      else if(Data.weather[0].icon==='09d' ||Data.weather[0].icon==='09n') {
        setWicon(rain_icon)
      }
      else if(Data.weather[0].icon==='10d' ||Data.weather[0].icon==='10n') {
        setWicon(rain_icon)
      }
      else if(Data.weather[0].icon==='13d' ||Data.weather[0].icon==='13n') {
        setWicon(snow_icon)
      }
      else{
        setWicon(clear_icon)
      }

      
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className='cityInput'  placeholder='search...' />
                <div className="search_icon">
                    <img src={search_icon} onClick={()=>{search()}} alt="" />
                </div>
            </div>
            <div className="wheather-image">
                <img src={Wicon} alt="" />
            </div>
            <div className="weather-temperature">23°C</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} className='icon' alt="" />
                    <div className="data">
                    <div className="humidity-percent">80%</div>
                    <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} className='icon' alt="" />
                    <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WheatherApp