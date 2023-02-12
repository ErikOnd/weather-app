import { Col, Card, } from "react-bootstrap"
import removeBtn from '../assets/remove-btn.svg'

const WeatherInfo = ({ info }) => {
    return (
        <>
            <Col className="mt-5">
                <Card className="weather-card">
                    <Card.Img variant="top" className="p-5" src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
                    <Card.Body className="cart-text text-left">
                        <Card.Title className="location-name"><b>{info.name}</b></Card.Title>
                        <Card.Text className="d-flex flex-column">
                            <span><b>Weather:</b></span>
                            <span><b>Temperature</b>: 4-6 °C</span>
                            <span><b>Something else:</b> test</span>
                        </Card.Text>
                    </Card.Body>

                    <img src={removeBtn} alt="remove btn" className="remove-btn" />

                </Card>
            </Col>
        </>
    )
}

export default WeatherInfo