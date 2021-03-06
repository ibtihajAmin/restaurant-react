import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: "15px", padding: "5px" }}>
                <CardBody>
                    <CardImg width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: 0.6 }} />
                    <CardImgOverlay>
                        <CardTitle style={{ fontSize: "20px", cursor: "pointer" }}
                            onClick={props.DishSelect}>
                            {props.dish.name}</CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;