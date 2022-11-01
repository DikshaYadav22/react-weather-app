import React, {useState, useEffect} from "react";
import "./style.css";
import { FaStreetView } from "react-icons/fa";
import axios from 'axios';

function TempApp() {
  const[searchData, setSearchData] = useState("");
  const[city, setCity] = useState(null);

  const fetchData = async() => 
  {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&appid=a7bd79a9a457cc35acf165b0050d5cf1`);
    console.log(res.data);
    if(res.data){
      setCity(res.data.main);
    }
    else {
      console.log("error found");
  }
  }

  useEffect(()=> {
    fetchData();
  }, [searchData]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputField"
            onChange={(e)=>setSearchData(e.target.value)}
          />
        </div>
{!city? "No data found" : <><div className="info">
          <h2 className="location">
                    <FaStreetView />
              {searchData}
          </h2>
          <h1 className="temp">{city.temp}* Cel</h1>
          <h3 className="tempmin_max">Min: {city.temp_max}* Cel | Max: {city.temp_min}* Cel</h3>
        </div>
        <div className="wave-one"></div>
        <div className="wave-two"></div>
        <div className="wave-three"></div>
        </>
      }
      </div>

    </>
  );
}

export default TempApp;
