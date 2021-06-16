import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import classes from './Product.module.scss';

// Import Components
import PickupInfo from '../UI/PickupInfo/PickupInfo';
import Rating from '../UI/Rating/Rating';
import Price from '../UI/Price/Price';

export class Product extends Component {
	render() {
		const {
			description,
			discount,
			discount_percent,
			discount_price,
			imageUrl,
			pickup_place,
			price,
			rate,
			pickup_info,
		} = this.props.product;

		return (
			<div className={classes.product}>
				<div className={classes.image__container}>
					<Image fluid src={imageUrl.small} />
					<div className={classes.floating__icon}>
						<Image fluid src="/images/360.svg" />
					</div>
				</div>
				<div className={classes.product__content}>
					<p className={classes.description}>{description}</p>
					<Price
						price={price}
						discount={discount}
						discount_price={discount_price}
						discount_percent={discount_percent}
					/>
					<div className={classes.rating__container}>
						<Rating /> <span className={classes.rate}>{rate} of 5</span>
					</div>
				</div>
				<PickupInfo pickup_place={pickup_place} pickup_info={pickup_info} />
			</div>
		);
	}
}

export default Product;