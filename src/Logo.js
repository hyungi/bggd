import React from "react";
import Carousel from "react-bootstrap/Carousel";

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
        const logos = this.state.logos

        return (
            <Carousel variant="dark" pause="hover">
                {logos.map(logo => (
                    <Carousel.Item>
                        <img className="d-block w-100" src={logo.path} alt={logo.alt}/>
                        <Carousel.Caption>
                            <h3>{logo.captionHead}</h3>
                            <p>{logo.captionBody}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }
}
