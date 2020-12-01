import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

function RenderInventoryItem({ card }) {
    return (
        <div className="bg-white">
            <Card className="grow">
                <CardTitle><h3>{card.title}</h3></CardTitle>
                <CardImg src={card.image} style={{ width: 200 }} />
                <div className="card-text">
                    <CardText><p>{card.text}</p></CardText>
                    <span style={{ color: "red" }}>{card.price}</span>
                </div>
            </Card>
        </div>
    );
}

export default function Inventory(props) {

    const inventory = props.cards.map(card => {
        return (
            <div key={card.id} className="col-md-4">
                <RenderInventoryItem card={card} />
            </div>
        );
    });

    return (
        <div className="section">
            <div className="container showcase">
                <div className="row">
                    {inventory}
                </div>
            </div>
        </div>
    );
}