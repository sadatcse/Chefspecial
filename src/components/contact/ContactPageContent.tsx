const ContactPageContent = () => {
    return (
        <>
            <div className="maps-area overflow-hidden">
                <div className="google-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d766.9819438791162!2d90.39051075351101!3d23.87537607012528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1752475760855!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Chef's Special Location Map"
                    ></iframe>
                </div>

                <div className="contact-style-one-items">
                    <div className="container">
                        <div className="contact-style-one-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-style-one-info">
                                        <h2>Visit Chef's Special</h2>
                                        <p>
                                            Whether you're here for a flavorful lunch or a cozy dinner, our team is ready to serve you with warmth and great taste. For party reservations or inquiries, feel free to reach out!
                                        </p>
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="content">
                                                    <h5 className="title">Hotline</h5>
                                                    <a href="tel:+8801755601407">+880 1755-601407</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">Our Location</h5>
                                                    <p>
                                                        Level-2, 1/B Gareeb-E-Nawaz Road, Sector-11, <br />
                                                        Above Sultan’s Dine, Uttara, Dhaka-1230
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-envelope-open-text" />
                                                </div>
                                                <div className="info">
                                                    <h5 className="title">Official Email</h5>
                                                    <a href="mailto:info@chefsspecial.restaurant">info@chefsspecial.restaurant</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Add a contact form or second column here if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPageContent;
