import React, {useEffect, useState} from "react";
import {Carousel} from "react-bootstrap";
import {render} from "react-dom";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

function getImageSize(src) {
    const img = new Image();
    let _width, _height;

    img.src = src;
    _width= img.width;
    _height= img.height;

    return [_width, _height]
}

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logos: []
        };
    }

    componentDidMount() {
        console.log(this.props.location)
        fetch(this.props.location)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    logos: result
                })
            })
    }

    // 이미지 리스트를 별도로 보관해서 혹은 특정 path 하위에 있는 모든 데이터들을 다 가져와서 동적으로 size list 를 생성하여 저장 하는 function 이 필요
    // screen size 를 동적으로 확인 해서 이미지 사이즈를 동적으로 screen size 에 맞춰 조절해줘야 함.
    // img_src = ["img/bonggaegude.jpeg", "img/logo_on_phone.png", "img/greeting.png"]


    // js 에서는 파일 시스템에 동적으로 접근할 방법이 없다고함...
    render() {
        let size1 = getImageSize(this.state.logos[0])
        let size2 = getImageSize(this.state.logos[1])
        let size3 = getImageSize(this.state.logos[2])

        console.log(size1)
        console.log(size2)
        console.log(size3)

        return (
            <Carousel variant="dark" pause="hover">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={(this.state.logos)[0]}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>봉개구디</h3>
                        <p>봉천동 개발자 구파발 디자이너</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={(this.state.logos)[1]}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Image on phone.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={(this.state.logos)[2]}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Greetings</h3>
                        <p>Greetings from word wide country</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
