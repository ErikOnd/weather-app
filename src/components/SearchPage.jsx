import { Form, FormControl, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import bgVideo from "../assets/video.mp4"
import WeatherInfo from "./WeatherInfo";
import { useEffect, useState } from "react";


const SearchPage = () => {


    const successCallback = (position) => {
        console.log(position.coords.latitude)

        getWeatherToday(position.coords.latitude, position.coords.longitude)

    };

    const errorCallback = (error) => {
        console.log(error);
    };


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, [])








    const [weatherInfos, setWeatherInfo] = useState([])

    const addItem = (newItem) => {
        setWeatherInfo([...weatherInfos, newItem]);
    }

    const [location, setLocatoin] = useState()

    const locationToState = (event) => {
        setLocatoin(event.target.value);
    };

    const handleKeyPress = event => {
        if (event.key === "Enter") {
            event.preventDefault();
            getLocation(location);
        }
    };



    const getLocation = async (location) => {
        try {
            const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=05833546db38c472f354ec08859e52c7`)
            const data = await res.json()
            if (res.ok) {
                const lat = data[0].lat
                const lon = data[0].lon
                getWeatherToday(lat, lon)
            }

        } catch (error) {
            console.log(error)

        }
    }

    const getWeatherToday = async (lat, lon) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05833546db38c472f354ec08859e52c7`)
            const data = await res.json()
            if (res.ok) {
                addItem(data)
            }

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            {console.log(weatherInfos)}
            <Form className="form-input">
                <FormControl
                    size="lg"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    className="search-input"
                    onKeyDown={handleKeyPress}
                    value={location}
                    onChange={locationToState}
                >
                </FormControl>
                <div className="search-icon-holder" onClick={(() => {
                    getLocation(location)
                })}>
                    <Search className="search-icon"></Search>
                </div>
            </Form>
            <video src={bgVideo} muted loop autoPlay className="bg-video"></video>
            <div className="video-overlay"></div>
            <Row xs={1} sm={2} md={3} className="g-4">
                {weatherInfos.map((weatherInfo) => {
                    return (
                        <WeatherInfo info={weatherInfo} key={weatherInfo.name} setInfo={setWeatherInfo} weatherArr={weatherInfos}></WeatherInfo>
                    )

                })}

            </Row>

        </>
    )
}

export default SearchPage