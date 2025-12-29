import { useEffect, useState } from "react"
import "../Styles/aboutme.css"
import weatherReport from "./weather";

const options = {
    timeZone: 'Europe/Minsk',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
};

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Drizzle: Light",
  53: "Drizzle: Moderate",
  55: "Drizzle: Dense",
  61: "Rain: Slight",
  63: "Rain: Moderate",
  65: "Rain: Heavy",
  71: "Snow: Slight",
  73: "Snow: Moderate",
  75: "Snow: Heavy",
  80: "Rain showers: Slight",
  81: "Rain showers: Moderate",
  82: "Rain showers: Violent",
};

export default function AboutMe() { 
    let date = new Date();
    const [currentDate, setCurrentDate] = useState(date.toLocaleString('en-US', options) + " GMT+3");
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            const newDate = new Date();

            const myTime = newDate.toLocaleString('en-US', options) + " GMT+3";
            setCurrentDate(myTime)
        }, 1000)

        return () => clearInterval(id);
    }, [])

    useEffect(() => {
        async function updateWeather() {
            const weather = await weatherReport();
            const tWeather = `${Math.round(weather.current.temperature_2m)} °C, ${weatherCodes[weather.current.weather_code]}`;
            setCurrentWeather(tWeather);
        }

        updateWeather(); 

        const id = setInterval(updateWeather, 1800000);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="about-me-container">
            <p className="headerText">AboutMe.jsx</p>
            <div className="header">
                <img src="https://avatars.githubusercontent.com/u/67631845?v=4" className="pfp" />
                <div className="header-info">
                    <p className="name"><b>Konstantin <span className="blop" style={{top: "-2rem", left: "15rem", background: "green", width: "7rem", height: "7rem"}}></span>Grin</b></p>
                    <p className="date">{currentDate}</p>
                    <p className="weather">{currentWeather}</p>
                </div>
            </div>
            <p className="description">20 y.o. CS student at Gomel State University of Francisk Skaryna. Interested in Front-end Web development. <p>Kinda retarted btw :{">"}</p></p>
        </div>
    )
}