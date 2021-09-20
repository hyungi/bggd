import React from "react"
import {Button, Card} from "react-bootstrap";
import About from "./About";

export default function Home() {
    return (
        <div align="center">
            <h1>This is a toy project for react study</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="logo512.png" />
                <Card.Body>
                    <Card.Title>React</Card.Title>
                    <Card.Text>
                        This is toy project for react study
                    </Card.Text>
                    <Button variant="primary" href={About}>Go about</Button>
                </Card.Body>
            </Card>
        </div>
    )
}