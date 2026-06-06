import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';

import food1 from "/assets/img/food/Food1.jpg";
import food2 from "/assets/img/food/Food2.jpg";
import food3 from "/assets/img/food/Food3.jpg";

import team10 from "/assets/img/team/cus1.jpg";
import team11 from "/assets/img/team/cus2.jpg";
import team12 from "/assets/img/team/cus3.jpg";

interface DataType {
    sectionClass?: string;
}

const TestimonialV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-one-area default-padding text-center ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <Swiper
                                direction={"horizontal"}
                                loop={true}
                                autoplay={true}
                                pagination={{
                                    el: '.swiper-pagination',
                                    type: 'bullets',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                }}
                                className="testimonial-style-one-carousel"
                                modules={[Keyboard, Autoplay, Pagination, Navigation]}
                            >
                                <div className="swiper-wrapper">

                                    {/* Slide 1: Pizza */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-one">
                                            <div className="item">
                                                <div className="content">
                                                    <div className="tm-review">
                                                        {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
                                                    </div>
                                                    <div className="provider">
                                                        <h4>More Than Just Pizza</h4>
                                                    </div>
                                                    <p>
                                                        {`"Pizza has a special place in my heart. From the very first bite I ever had, I knew it was something unforgettable. The gooey cheese, crispy crust, and rich toppings — it’s not just a meal, it’s an experience that brings comfort, joy, and a smile every single time."`}
                                                    </p>
                                                    <div className="tm-proivder-thumb">
                                                        <img src={food1} alt="Pizza" />
                                                        <img src={team10} alt="Customer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 2: Fried Rice */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-one">
                                            <div className="item">
                                                <div className="content">
                                                    <div className="tm-review">
                                                        {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
                                                    </div>
                                                    <div className="provider">
                                                        <h4>Fried Rice Really Awesome</h4>
                                                    </div>
                                                    <p>
                                                        {`"Fried rice has always been a favorite of mine. I first tasted it when I was just 10 years old, and now at 30, it still amazes me. The flavor, the aroma — everything about it is simply perfect. Tasting it today brought back memories and reminded me just how incredible this dish truly is."`}
                                                    </p>
                                                    <div className="tm-proivder-thumb">
                                                        <img src={food2} alt="Fried Rice" />
                                                        <img src={team11} alt="Customer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Slide 3: Seafood */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-style-one">
                                            <div className="item">
                                                <div className="content">
                                                    <div className="tm-review">
                                                        {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
                                                    </div>
                                                    <div className="provider">
                                                        <h4>Flavors from the Ocean</h4>
                                                    </div>
                                                    <p>
                                                        {`"Seafood always brings a sense of freshness and adventure to the table. Every bite carries the taste of the sea — delicate, rich, and full of character. Whether it’s grilled, fried, or steamed, seafood has a unique way of satisfying the soul and awakening the senses. It’s not just food, it’s a journey through the ocean’s finest gifts."`}
                                                    </p>
                                                    <div className="tm-proivder-thumb">
                                                        <img src={food3} alt="Seafood" />
                                                        <img src={team12} alt="Customer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </div>
                            </Swiper>

                            {/* Pagination */}
                            <div className="testimonial-pagination">
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;
