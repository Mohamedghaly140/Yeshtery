import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Spinner from "../UI/Spinner/Spinner";
import Rating from "../UI/ProductDetailsRating/Rating";
import Price from "../UI/ProductDetailsPrice/ProductDetailsPrice";
import Sizes from "../Sizes/Sizes";
import Colors from "../Colors/Colors";
import Quantity from "../Quantity/Quantity";
import PreviewImages from "./PreviewImages";
import classes from "./ProductDetail.module.scss";

export class ProductDetail extends Component {
  state = {
    imageUrl: null,
    loading: false,
  };

  previewImageHandler = imageUrl => {
    this.setState({ imageUrl });
  };

  render() {
    if (!this.props.product) {
      return <Spinner />;
    }

    const {
      imageUrl,
      description,
      rates,
      price,
      rate,
      brand,
      discount,
      discount_price,
      discount_percent,
    } = this.props.product;

    return (
      <Container className={classes.product__details}>
        <Row>
          <Col
            xs={12}
            className="d-block d-sm-block d-md-none d-lg-none d-xl-none"
          >
            <div>
              <Image className="mb-3" src={brand} fluid />
              <p className={classes.description}>{description}</p>
              <p className={classes.product__type}>Men</p>
              <div className={classes.rate__container}>
                <Rating rating={rate} />{" "}
                <span className={classes.rating}>{rate} of 5</span>
                <span className={classes.rates}>{rates} Rates</span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={classes.preview}>
            <div className={classes.main__image}>
              {this.state.loading ? (
                <Spinner />
              ) : (
                <Image
                  src={
                    this.state.imageUrl ? this.state.imageUrl : imageUrl.large
                  }
                  fluid
                />
              )}
              <span>
                <Image src="/images/360@2x.svg" fluid />
              </span>
            </div>
            <PreviewImages onPreviewImage={this.previewImageHandler} />
          </Col>
          <Col md={12} lg={6}>
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
              <Image className="mb-3" src={brand} fluid />
              <p className={classes.description}>{description}</p>
              <p className={classes.product__type}>Men</p>
              <div className={classes.rate__container}>
                <Rating rating={rate} />{" "}
                <span className={classes.rating}>{rate} of 5</span>
                <span className={classes.rates}>{rates} Rates</span>
              </div>
            </div>
            <div className="mb-3">
              <Price
                price={price}
                discount={discount}
                discount_price={discount_price}
                discount_percent={discount_percent}
              />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div>
              <h4 className={classes.title}>Size</h4>
              <Sizes />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div className="my-3">
              <h4 className={classes.title}>Color</h4>
              <Colors />
            </div>
            <hr style={{ border: "0.5px solid #D9D9D9" }} />
            <div className="my-3">
              <h4 className={classes.title}>Quantity</h4>
              <Quantity
                addToCart={this.props.addToCart}
                product={this.props.product}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetail;
