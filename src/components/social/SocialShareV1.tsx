import { Link } from "react-router-dom";

const SocialShareV1 = () => {
    return (
        <>
            <li className="facebook">
                <Link to="https://www.facebook.com" target="_blank">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li className="twitter">
                <Link to="https://dribbble.com" target="_blank">
                    <i className="fab fa-dribbble" />
                </Link>
            </li>
            <li className="twitter">
                <Link to="https://www.linkedin.com" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV1;