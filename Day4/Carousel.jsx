import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-blockimg-responsive"
                    src="/Images/cyber.jpg"
                    alt="First slide"
                    style={{ height: '350px', objectFit: 'cover', width: '1300px' }}
                />
                <Carousel.Caption>
                    <h3 style={{ color: "white" }}>Be Safe, Stay Safe</h3>
                    <p style={{ color: "white" }}>Your Safety is Our First Priority.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-blockimg-responsive"
                    src="/Images/help.jpg"
                    alt="First slide"
                    style={{ height: '350px', objectFit: 'cover', width: '1300px' }}
                />
                <Carousel.Caption>
                    <h3 style={{ color: "white" }}>Help Line</h3>
                    <p style={{ color: "white" }}>Dial HelpLine  ****  if you are a Victim.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;