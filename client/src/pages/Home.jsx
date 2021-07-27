import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../components/UI/Spinner/Spinner";
import Banner from "../components/Banner/Banner";
import BestOffers from "../components/BestOffers/BestOffers";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import ShopByBrand from "../components/ShopByBrand/ShopByBrand";
import VirtualTour from "../components/VirtualTour/VirtualTour";
import PremiumProducts from "../components/PremiumProducts/PremiumProducts";
import GiftsOnBudget from "../components/GiftsOnBudget/GiftsOnBudget";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

class Home extends Component {
  render() {
    const { loading, products, gifts, brands, offers, tours, categories } =
      this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Banner />
        <div className="container">
          <ShopByCategory categories={categories} />
          <BestOffers offers={offers} />
          <ShopByBrand brands={brands} />
          <VirtualTour tours={tours} />
          <PremiumProducts products={products} />
          <GiftsOnBudget gifts={gifts} />
          <VideoPlayer />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Home);
