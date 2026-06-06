import logo3 from "/assets/img/logo-3.png"
import { Link } from "react-router-dom";
import SocialShare from "../social/SocialShareV2";
import FooterNewsletter from "./FooterNewsletter";

const FooterV1 = () => {
    return (
        <>
            <footer className="pb-60">
                <div className="container">
                    <div className="footer-style-one bg-dark text-light" data-aos="fade-up" data-aos-delay="100">
                        <div className="row">

                            {/* Single Item */}
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <div className="f-item about">
                                    <img src={logo3} alt="Image Not Found" />
                                    <p>
                                        Experience gourmet excellence, handcrafted by our world-class 5-star chefs.
                                    </p>
                                    <ul className="opening-list">
                                        <li>
                                            Sat  -  Thu <span className="text-end">11:00 AM  -  11:00 PM</span>
                                        </li>
                                        <li>
                                            Friday <span className="text-end">11:00 AM  -  11:30 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Single Item */}
                            <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                                <div className="f-item link">
                                    <h4 className="widget-title">Explore</h4>
            <ul>
    <li>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
    </li>
    <li>
        <Link to="/privacy-policy">Privacy Policy</Link>
    </li>
    <li>
        <Link to="/career">Career</Link>
    </li>
    <li>
        <Link to="/about-us">About Us</Link>
    </li>
    <li>
        <Link to="/faq">FAQ</Link>
    </li>
    <li>
        <Link to="/contact">Contact</Link>
    </li>
</ul>
                                </div>
                            </div>

                            {/* Single Item */}
                            <div className="col-lg-3 col-md-6 footer-item  mt-50">
                                <div className="f-item contact">
                                    <h4 className="widget-title">Contact Info</h4>
                                    <ul className="contact-widget">
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt" />
                                            </div>
                                            <div className="content">
                                                Level-2, 1/B, Gareeb-E-Nawz Road, Sector-11, Uttara, Dhaka-1207
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone" />
                                            </div>
                                            <div className="content">
                                                <a href="tel:2151234567">+8801755601407</a> 
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-envelope" />
                                            </div>
                                            <div className="content">
                                                <a href="mailto:name@email.com">info@chefsspecial.restaurant</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Single Item */}
                            <div className="col-lg-3 col-md-6 footer-item mt-50">
                                <h4 className="widget-title">Newsletter</h4>
                                <p>
                                    Join our subscribers list to get the latest news and special offers.
                                </p>
                                <FooterNewsletter />
                            </div>
                        </div>

                        <div className="footer-bottom text-light">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <p>
                                        &copy; Copyright  Chef’s Special. All Rights Reserved © {(new Date().getFullYear())}
                                    </p>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <ul className="footer-social">
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default FooterV1;