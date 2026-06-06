import about1 from "/assets/img/about/1.png";

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-one">
                                <img src={about1} alt="Chef's Special Interior" data-aos="fade-up" data-aos-delay="100" />
                                <div className="contact-card-one" data-aos="fade-left" data-aos-delay="200">
                                    <a href="tel:+8801755601407">
                                        <div className="icon">
                                            <i className="fa fa-phone" />
                                        </div>
                                        <div className="info">
                                            <span>HOTLINE 24/7</span>
                                            <h4>+8801755601407</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-one-info">
                                <h4 className="sub-heading">Our Story</h4>
                                <h2 className="title">A Flavorful Journey That Just Began</h2>
                                <div className="content mt-50">
                                    <p>
                                        Welcome to <strong>Chef’s Special</strong> — where every dish tells a story. We started with a simple mission: to bring bold flavors, fresh ingredients, and fusion creativity to every plate we serve. Our passion for food goes beyond taste — it’s about creating memories, warmth, and experiences that make you feel at home.
                                    </p>
                                    <p>
                                        Located in the heart of Uttara, just above Sultan’s Dine, Chef’s Special is your go-to destination for mouthwatering meals, vibrant ambiance, and heartfelt hospitality. Whether you're here for a cozy lunch or a grand family dinner, we promise to serve flavor with love.
                                    </p>
                                    <p>
                                        Join us and become part of a culinary journey that celebrates tradition, reinvents fusion, and respects your tastebuds. Because at Chef’s Special — every bite is special.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;
