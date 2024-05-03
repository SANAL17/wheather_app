import React, { useState } from 'react'
import './Home.css';
import axios from "axios"
function Home() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const baseKey = '9611c8f6510b9c8bb11417485b99399e'
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,
          
        },
      });
      setWeatherData(response.data);
      console.log(weatherData);
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
 
  
  
  
  
  return (
    <div>
      <div className="img">
        <img width={'100%'} height={"100%"} src="https://coolwallpapers.me/picsup/2963676-digital-art-nature-moon-stars-sky-night-clouds-blue-fantasy-art-vector-art-landscape-winter-snow-pine-trees-hill-house-lights-glowing-smoke___mixed-wallpapers.jpg" alt="" />
        <div className='wheather shadow, rounded-9'  style={{position:"absolute", top:'220px', left:'36%', width:"490px", height:'480px', backdropFilter:'blur(25px)'}}>
       
        <div className='d-flex mt-5'>
          <div>
          <input  value={city} onChange={(e)=>setCity(e.target.value)} style={{width:"350px",marginLeft:'45px'}} type="text" placeholder='Search for a city' className='form-control'/>

          </div>
          <div className='text-center'>
            <button style={{background:'none',border:'none'}} onClick={getWeatherData}>
            <i  class="fa-solid fa-magnifying-glass text-primary bg-white p-2 ms-2 rounded-4  fs-5"></i>

            </button>
        </div>
        </div>       
       {
        weatherData && (
          <div className='text-center text-white m-4'>

          <h1>{weatherData.name}, {weatherData.sys.country}</h1>
         
          <p className='m-3' style={{fontWeight:"bold",fontSize:'60px'}}>{parseFloat((weatherData.main.temp-273.15).toFixed(1))}°C</p>
          <h1>{weatherData.weather[0].description}</h1>
          
          <div className="row m-4 p-1">
            <div className="col-4">
            <i class="fa-solid fa-cloud fs-3"></i>
            <h5 className='m-1'>{weatherData.clouds.all} %</h5>

            </div>
            <div className="col-4">
            <i class="fa-solid fa-droplet fs-3"></i>
            <h5 className='m-1'>{weatherData.main.humidity} %</h5>

            </div>
            <div className="col-4">
            <i class="fa-solid fa-wind fs-3"></i>
            <h5 className='m-1'>{weatherData.wind.speed} m/s</h5>
            </div>
          </div>
      

        </div>
        )
       } 
        <div>

        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Home