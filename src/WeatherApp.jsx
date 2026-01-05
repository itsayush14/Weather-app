import SearchBox from "./searchbox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){ 

    const[weatherInfo , setWeatherInfo] = useState({ 

       city : "Mumbai",
        temp : 25.05 ,
        temp_max : 25.05 ,
        temp_min : 25.05,
        humidity : 47 ,
        feels_like : 24.84 ,
        weather : "Haze",


    });

    let updateInfo = (newinfo) => { 
        setWeatherInfo(newinfo);


    }
    return( 
        <div style={{textAlign: "center"}}> 
            
            <h3 >Weather App by Ayush</h3>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
            
            </div>
    )
}