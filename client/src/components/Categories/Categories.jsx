import React, { Component } from "react";
import CategoryItem from "../UI/CategoryItem/CategoryItem";

import categoriesData from "../../services/all-categories.json";

class Categories extends Component {
  render() {
    return (
      <div className="row">
        {categoriesData.map(category => (
          <div
            key={category.id}
            className={`col-6 col-md-4 col-lg-4 ${
              category.hidden && "d-none d-md-block"
            }`}
          >
            {category.items.map(item => (
              <CategoryItem
                key={item.id}
                lg={item.lg}
                sm={item.sm}
                title={item.title}
                description={item.description}
                backgroundImage={item.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
