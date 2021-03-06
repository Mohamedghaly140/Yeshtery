import { Component } from "react";
import Subscribe from "../UI/Subscribe/Subscribe";
import Copyright from "./Copyright";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const footerLinks = [
      { title: "About Us" },
      { title: "Contact Us" },
      { title: "Track Order" },
      { title: "Terms & Conditions" },
      { title: "Privacy Policy" },
      { title: "Sell With Us" },
      { title: "Shipping And Returns" },
    ];

    const socialMedia = [
      { title: "/YESHTERY", icon: "/images/facebook.svg" },
      { title: "/YESHTERY", icon: "/images/linkedin.svg" },
      { title: "/YESHTERY", icon: "/images/instagram.svg" },
      { title: "/YESHTERY", icon: "/images/twitter.svg" },
    ];

    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="mb-4 img-fluid"
                  src={this.props.logoDark}
                  alt="brand_logo_yellow"
                />
                <p>{this.props.description}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="subscribe">
                <h3>Subscribe to our newsletter</h3>
                <Subscribe />
              </div>
              <div className="row">
                <div className="col">
                  <ul>
                    {footerLinks.map(link => (
                      <li key={link.title}>
                        <a href=":javascript;">{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    {socialMedia.map((link, index) => (
                      <li key={index}>
                        <img
                          src={link.icon}
                          className="me-1 img-fluid"
                          alt={link.title}
                        />{" "}
                        <a href=":javascript;">{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-2 mb-3" style={{ border: "0.2px solid #999" }} />
          <Copyright />
        </div>
      </footer>
    );
  }
}

export default Footer;
