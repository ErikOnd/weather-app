import { Col, Card, } from "react-bootstrap"
import removeBtn from '../assets/remove-btn.svg'

const WeatherInfo = ({ info, setInfo, weatherArr }) => {


    const kelvinToCelsius = (kelvin) => {
        return Math.round(kelvin - 273.15);
    }

    const meterPerSecToKmPerHour = (meterPerSec) => {
        return Math.round(meterPerSec * 3.6);
    }

    const removeItem = (index) => {
        const newArray = [...weatherArr];
        newArray.splice(index, 1);
        setInfo(newArray)
    }



    return (
        <>
            <Col className="mt-5">
                <Card className="weather-card">
                    <Card.Img variant="top" className="p-5" src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                    <Card.Body className="cart-text text-left">
                        <Card.Title className="location-name"><b>{info.name}</b></Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span><b>Weather: </b>{info.weather[0].description}</span>
                            <span><b>Temperature</b>: {kelvinToCelsius(info.main.temp_min)}-{kelvinToCelsius(info.main.temp_max)}°C</span>
                            <span><b>Humidity: </b>{info.main.humidity}%</span>
                            <span><b>Wind: </b>{meterPerSecToKmPerHour(info.wind.speed)}km/h</span>
                        </Card.Text>
                    </Card.Body>

                    <img src={removeBtn} alt="remove btn" className="remove-btn" onClick={() => {
                        const index = weatherArr.indexOf(info);
                        removeItem(index)
                    }} />

                </Card>
            </Col>
        </>
    )
}

export default WeatherInfo




/*


todo: weather forecast
todo: getting location automatically




*/