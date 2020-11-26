import React from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap';

export default function RenderCards({ cards }) {
    return (
        <Card>
            <CardBody>
                <CardTitle>{cards.title}</CardTitle>
                <CardImg>{cards.img}</CardImg>
                <CardText>{cards.text}</CardText>
            </CardBody>
        </Card>

    );
}

function CardInfo(props) {
    return (
        <div className="container">
            {
                props.card ?
                <div className="row">
                    <RenderCards cards={props.card} />
                </div>
            }
        </div>

    );
}