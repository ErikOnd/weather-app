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



    const getImg = (cloudiness, maxTemp) => {

        if (cloudiness < 10) {
            return 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
        }

        if (cloudiness < 60) {
            return 'https://cdn-icons-png.flaticon.com/512/9586/9586736.png'
        }

        if (cloudiness < 90) {
            return 'https://cdn-icons-png.flaticon.com/512/473/473697.png '
        }

        if (cloudiness > 90 && maxTemp <= 0) {
            return 'https://cdn-icons-png.flaticon.com/512/7334/7334205.png '
        }

        if (cloudiness > 90) {
            return 'https://cdn-icons-png.flaticon.com/512/7038/7038436.png'
        }

    }




    return (
        <>
            <Col className="mt-5">
                <Card className="weather-card">
                    <Card.Img variant="top" className="p-5" src={getImg(info.clouds.all, kelvinToCelsius(info.main.temp_max))} />
                    <Card.Body className="cart-text text-left">
                        <Card.Title className="location-name"><b>{info.name}</b></Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span><b>Weather: </b>{info.weather[0].description}</span>
                            <span><b>Temperature</b>: {kelvinToCelsius(info.main.temp_max)}° / {kelvinToCelsius(info.main.temp_min)}°</span>
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

todo: update images
todo: weather forecast


*/