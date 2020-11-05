import React from "react";
import "./Product.css";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function RenderProductItem({product}) {
    return (
         <Card >
            <CardImg className="cardImg" top width="100%" src={product.img} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">${product.price}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted product__rating">{Array(product.rate)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}</CardSubtitle>
              <CardText>{product.title}</CardText>
              <Button type="submit" color="primary">Add To Basket</Button>
            </CardBody>
      </Card>
    );
}

function Product( props ) {


    const product = props.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderProductItem product={product} />
            </div>
        );
    });

    return(
      <div className="home__row row">
        {product}
      </div>
    )
}

export default Product;