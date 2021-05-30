import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import currencyFormatter from "currency-formatter";

const ProductInfo = (props) => {
    const { name, image, id, price, discount, discountPrice, description } = props.product;
    return (
        <div className="col-lg-6 col-xl-4 mt-4">
            <Card className="shadow">
                <Link to={`/details/${id}`}><Card.Img variant="top" src={`/images/${image}`} style={{height:'450px',padding:'10px', borderRadius:'15px', display:'block'}} className="animation" /></Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-muted">{description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-around">
                    <div>
                        <span>{currencyFormatter.format(price, { code: 'USD' })}</span> <span className="text-muted"  style={{fontSize:'13px'}}>{discount}%</span>
                    </div>
                    <div>
                        {currencyFormatter.format(discountPrice, { code: 'USD' })}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductInfo;