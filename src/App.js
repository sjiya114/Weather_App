import './App.css';
import Education from './components/Home';
import Navbar from './components/Navbar';
import React,{useState,useEffect} from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TenDay from './components/TenDay';
import About from './components/About';
import Hourly from './components/Hourly';
function App() {
    const [city, setCity] = useState('Bhopal');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const apiKey=process.env.REACT_APP_APIKEY
    // eslint-disable-next-line
    const fetchWeather = async () => {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res) {
          throw new Error("City not found");
        }
        const d = await res.json();
        setData(d);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    // eslint-disable-next-line
    useEffect(() => {
      // eslint-disable-next-line
      fetchWeather();
    }, []);
  
    const handleCityChange = (e) => {
      setCity(e.target.value);
    };
  return (
    <>
      <Router>
        <Navbar/>
        <div className=" md:ml-[480px]  sm:mt-[50px]  sm:ml-4 ">
        <input type='text' className="h-9 rounded-md w-60 px-3 bg-pink-100 text-black"     placeholder='Enter name of place' onChange={handleCityChange} />
        <button className="bg-green-950 text-white rounded-md w-20 h-9 " onClick={fetchWeather} >Search</button>
        </div>
        <Routes>
          <Route exact path="/" element={<Education data={data} loading={loading} error={error} />}/> 
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Hourly" element={<Hourly data={data} loading={loading} error={error}/>}/>
          <Route exact path="/TenDays" element={<TenDay data={data} loading={loading} error={error}/>}/>
        </Routes>
        </Router>
  </>
  );
}
export default App;
