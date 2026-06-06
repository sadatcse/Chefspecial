import illustration10 from "/assets/img/illustration/10.png"
import illustration11 from "/assets/img/illustration/11.png"
import CountUp from "react-countup";

const OfferV1 = () => {
    return (
        <>
            <div className="discount-offer-area default-padding-top bg-gray-secondary text-center bg-cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-1 order-lg-last">
                            <div className="discount-info">
                                <h2>Delicious Food Menu</h2>
                                <p>
                                    Limited Time Offer
                                </p>
                                <ul>
                                    {/* The offer has been set to 20% based on the image provided */}
                                    <li>20% off on selected Appetizers</li>
                                    <li>20% off on all Pizzas</li>
                                    <li>20% off on Creamy Pasta dishes</li>
                                </ul>
                                <div className="offer-fun-fact">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={125} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Discount Per Week</span>
                                    </div>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={680} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Discount Per Month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="dicount-thumb text-center">
                                <img src={illustration10} alt="Image Not Found" data-aos="fade-up" />
                                <img src={illustration11} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferV1;