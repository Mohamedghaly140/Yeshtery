import React, { Component } from "react";
import classes from "./Product.module.scss";

// Import Components
// import Availability from "../UI/Availability/Availability";
import PickupInfo from "../UI/PickupInfo/PickupInfo";
import Rating from "../UI/Rating/Rating";
import Price from "../UI/Price/Price";

export class Product extends Component {
  render() {
    const {
      description,
      discount,
      imageUrl,
      price,
      rate,
      brand,
      pickup_info,
      pickup_place,
      // availability,
      discount_price,
      discount_percent,
    } = this.props.product;

    // const type =
    //   availability === 0
    //     ? "in-stock"
    //     : availability === 1
    //     ? "out-stock"
    //     : "Unknown";

    return (
      <div className={`${classes.product} product`}>
        <div className={classes.image__container}>
          <img className="img-fluid" alt="product" src={imageUrl.small} />
          <div className={classes.floating__icon} />
        </div>
        <div className={classes.product__content}>
          <p className={classes.description}>{description}</p>
          <Price
            brand={brand}
            price={price}
            discount={discount}
            discount_price={discount_price}
            discount_percent={discount_percent}
          />
          <div className={classes.rating__container}>
            <Rating rating={rate} />{" "}
            <span className={classes.rate}>{rate} of 5</span>
          </div>
        </div>
        {/* <Availability type={type} /> */}
        <PickupInfo pickup_place={pickup_place} pickup_info={pickup_info} />
      </div>
    );
  }
}

export default Product;
