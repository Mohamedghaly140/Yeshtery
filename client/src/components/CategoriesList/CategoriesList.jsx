import React, { Component } from "react";
import { withMediaQuery } from "../../hoc/withMediaQuery";
import CategoryItem from "../UI/CategoryItem/CategoryItem";

import classes from "./CategoriesList.module.scss";

class Categories extends Component {
  clacLgItem(outer, inner) {
    const { isMobile, isTablet } = this.props;

    if (isMobile || isTablet) {
      return outer % 2 === inner % 2;
    } else {
      return (outer % 3) % 2 === inner % 2;
    }
  }

  render() {
    const { className, categories, counts = Infinity } = this.props;

    const rows = new Array(Math.ceil(categories.slice(0, counts).length / 2));

    for (let i = 0; i < rows.length; i++) {
      rows[i] = { items: categories.slice(i * 2, i * 2 + 2) };
    }

    return rows.map((item, index) => (
      <div key={index} className={classes.category__item}>
        {item.items.map((category, i) => (
          <CategoryItem
            key={category.id}
            className={className}
            lg={this.clacLgItem(index, i)}
            title={category.title}
            imageUrlLg={category.imageUrlLg}
            imageUrlSm={category.imageUrlSm}
            description={category.description}
          />
        ))}
      </div>
    ));
  }
}

export default withMediaQuery(Categories);
