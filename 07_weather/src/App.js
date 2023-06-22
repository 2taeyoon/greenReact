import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import PulseLoader from "react-spinners/PulseLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [ weather, setWeather ] = useState(null); //날씨데이타
    const [ city, setCity ] = useState('current');
    const [ loading, setLoading ] = useState(true);

    const cities = ['sydney', 'oslo', 'baghdad', 'paris' ];

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            //console.log('현재 내 위치는?',lat,lon)

            getWeatherByCurrentLocation(lat, lon)
        });
    }

    // 좌표를 이용하여 날씨 API 가져오기
    const getWeatherByCurrentLocation = async (lat, lon) => {
        setLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ee59238175c9b356c48f21a39b95c0f0&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        setLoading(false);
    }
    
    // 도시 이름을 이용하여 날씨 API 가져오기
    const getWeatherByCity = async () => {
        setLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee59238175c9b356c48f21a39b95c0f0&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
        setLoading(false);
    }

    useEffect(()=>{
        if( city === 'current' ){
            getCurrentLocation();
        } else {
            getWeatherByCity();
            //console.log('선택한 도시는 city??',city);
        }
    }, [city] );

    return (
        <>
            { 
                loading ? (
                    <div className='container'>
                        <PulseLoader color="#ffffff" margin={10} size={30} speedMultiplier={1} />
                    </div>
                ) : (
                    <div className='container'>
                        <WeatherBox weather={weather} />
                        <WeatherButton cities={cities} setCity={setCity}/>
                    </div>
            )};
        </>
    );
}

export default App;
