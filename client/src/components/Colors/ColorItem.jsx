import { Component } from "react";
import { Image } from "react-bootstrap";
import classes from "./ColorItem.module.scss";

class ColorItem extends Component {
  render() {
    const { onSelectColor, image, selected, value } = this.props;

    return (
      <button
        style={{ border: selected ? "1px solid #542E90" : "none" }}
        className={classes.color__item}
        onClick={() => onSelectColor(value)}
      >
        <Image src={image} fluid />
      </button>
    );
  }
}

export default ColorItem;
