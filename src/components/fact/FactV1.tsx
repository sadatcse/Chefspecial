import illustration16 from "/assets/img/illustration/16.png"
import CountUp from 'react-countup';

const FactV1 = () => {
    return (
        <>
            <div className="fun-fact-style-one-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="fun-fact-style-one-items">
                                <h2>Experience of  real recipes taste</h2>
                                <div className="fun-fact-style-one-content">
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={50} enableScrollSpy /></div>
                                            <div className="operator">P</div>
                                        </div>
                                        <span className="medium">Daily Orders</span>
                                    </div>
                                    <div className="fun-fact">
                                        <div className="counter">
                                            <div className="timer"><CountUp end={110} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Menu </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="thumb" data-aos="fade-right" data-aos-delay="100">
                                <img src={illustration16} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;