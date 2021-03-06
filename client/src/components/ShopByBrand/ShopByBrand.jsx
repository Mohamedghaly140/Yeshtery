import React, { Component } from "react";
import { withMediaQuery } from "../../hoc/withMediaQuery";
import Section from "../UI/Section/Section";

import Carousel from "nuka-carousel";
import ShopByBrandContainer from "../UI/ShopByBrandContainer/ShopByBrandContainer";
import BrandItem from "../UI/BrandItem/BrandItem";
import SliderLeftButton from "../UI/SliderButtons/SliderLeftButton";
import SliderRightButton from "../UI/SliderButtons/SliderRightButton";

import classes from "./ShopByBrand.module.scss";

class ShopByBrand extends Component {
  state = {
    index: 3,
    slides: [],
  };

  componentDidMount() {
    const slides = this.props.brands.map(item => {
      return {
        id: item.id,
        title: item.data.title,
        brand: item.data.brand,
        imageUrl: item.data.imageUrl,
        description: item.data.description,
      };
    });

    this.setState({ slides });
  }

  selectBrandHandler = index => {
    this.setState({ index });
  };

  render() {
    const { index, slides } = this.state;
    const { brands, isMobile, isMobileSm, isTablet, isTabletLg } = this.props;

    const options = [
      { value: "Rate", label: "Rate" },
      { value: "price", label: "Price" },
    ];

    return (
      <Section
        selectOptions={options}
        selectPlaceholder="Fashion"
        title="Shop by brand"
        buttonTitle="View All"
        subTitle="Explore products by your favourite brands."
        renderBeforeList={
          () =>
            !slides.length ? (
              "loading"
            ) : (
              <ShopByBrandContainer
                title={slides[index].title}
                description={slides[index].description}
                buttonTitle={"Shop Now"}
                brandIcon={slides[index].brand}
                imageUrl={slides[index].imageUrl}
              />
            )
          // <Carousel
          //   wrapAround={true}
          //   autoplay={false}
          //   cellAlign="center"
          //   slideIndex={index}
          //   slidesToScroll={1}
          //   cellSpacing={isMobile ? 16 : 32}
          //   className="banner_carousel"
          //   renderCenterLeftControls={null}
          //   renderCenterRightControls={null}
          //   renderBottomCenterControls={null}
          //   renderTopLeftControls={null}
          //   renderTopRightControls={null}
          //   afterSlide={slideIndex => this.setState({ index: slideIndex })}
          // >
          //   {slides.map(item => (
          //     <ShopByBrandContainer
          //       key={item.id}
          //       title={item.title}
          //       description={item.description}
          //       buttonTitle={"Shop Now"}
          //       brandIcon={item.brand}
          //       imageUrl={item.imageUrl}
          //     />
          //   ))}
          // </Carousel>
        }
      >
        <Carousel
          wrapAround
          autoplay={true}
          cellAlign="center"
          slideIndex={index}
          slidesToScroll={1}
          className="brands_carousel"
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={null}
          slidesToShow={
            isMobile ? (isMobileSm ? 4 : 5) : isTabletLg ? 6 : isTablet ? 4 : 7
          }
          cellSpacing={isMobile ? 16 : isTabletLg ? 32 : isTablet ? 32 : 40}
          afterSlide={slideIndex => this.setState({ index: slideIndex })}
          renderTopLeftControls={({ previousSlide }) => (
            <SliderLeftButton
              className={classes.slide__button}
              onSlideLeft={previousSlide}
            />
          )}
          renderTopRightControls={({ nextSlide }) => (
            <SliderRightButton
              className={classes.slide__button}
              onSlideRight={nextSlide}
            />
          )}
        >
          {brands.map((item, i) => (
            <BrandItem
              index={i}
              id={item.id}
              brand={item}
              key={item.id}
              title={item.title}
              selected={index === i}
              imageUrl={item.imageUrl}
              onSelectBrand={this.selectBrandHandler}
            />
          ))}
        </Carousel>
      </Section>
    );
  }
}

export default withMediaQuery(ShopByBrand);
