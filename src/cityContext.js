import React, { useState, useContext, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'

const CityContext = createContext()


export const CityProvider = ({ children }) => {
  
  const [currentCity, setCurrentCity] = useState("İzmir")
  const [weatherData, setWeatherData] = useState()
  const key = "f095ae5b1a9f3593c74229fa12168dd8"
  
  useEffect(() => {
    
    switch (currentCity) {
      case "İzmir":
        axios(`https://api.openweathermap.org/data/3.0/onecall?lat=38.42&lon=27.14&exclude=current,minutely,hourly&units=metric&appid=${key}`)
        .then((res) => setWeatherData(res.data.daily))
        break;
        case "Kastamonu":
          axios(`https://api.openweathermap.org/data/3.0/onecall?lat=41.40&lon=33.78&exclude=current,minutely,hourly&units=metric&appid=${key}`)
          .then((res) => setWeatherData(res.data.daily))
          break;
          case "Eskişehir":
            axios(`https://api.openweathermap.org/data/3.0/onecall?lat=39.77&lon=30.50&exclude=current,minutely,hourly&units=metric&appid=${key}`)
            .then((res) => setWeatherData(res.data.daily))
            break;
            
          } 
          
        }, [currentCity])
       
        const values = {
          currentCity,
          setCurrentCity,
          weatherData, 
          setWeatherData,        
  }
  
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}
const useCity = () => useContext(CityContext)
export default useCity

