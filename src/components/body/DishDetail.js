import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import CardText from 'reactstrap/lib/CardText';
import LoadComments from './LoadComments';

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "15px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price} BDT/-</p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>

        </div>
    );
}

export default DishDetail;