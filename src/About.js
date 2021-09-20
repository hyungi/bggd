import React from "react";
import {Accordion} from "react-bootstrap";

export default function About() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>BGGD</Accordion.Header>
                <Accordion.Body>
                    봉천동 개발자, 구파발 디자이너의 약자
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>추가 예정</Accordion.Header>
                <Accordion.Body>
                    내용 추가
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}