import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div>
                    <img
                        className="d-block img-responsive"
                        src="/Images/gg.jpeg"
                        alt="First slide"
                        style={{ height: '350px', objectFit: 'fill', width: '1900px', marginLeft: '-190px' }}
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: "white" }}>Let's Stay Together and Form a Strong Society</h1>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div>
                    <img
                        className="d-block img-responsive"
                        src="/Images/gg.jpeg"
                        alt="First slide"
                        style={{ height: '350px', objectFit: 'fill', width: '1900px', marginLeft: '-190px' }}
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: "white" }}>Let's Stay Together and Form a Strong Society</h1>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>

        </Carousel>
    );
}

export default Slider;