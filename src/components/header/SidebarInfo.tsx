import logoLight2 from "/assets/img/logo-light-2.png";
import SocialShareV2 from "../social/SocialShareV2";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface HeaderSearchProps {
    searchOpen?: () => void;
    closeInfoBar?: () => void;
    openInfoBar?: () => void;
    isInfoOpen?: boolean;
}

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success("Thanks for subscribing to Chef's Special!");
};

const SidebarInfo: React.FC<HeaderSearchProps> = ({ searchOpen, closeInfoBar, openInfoBar, isInfoOpen }) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav attr-box">
                    <ul>
                        <li className="search">
                            <Link to="#" onClick={searchOpen}><i className="far fa-search"></i></Link>
                        </li>
                        <li className="side-menu">
                            <Link to="#" onClick={openInfoBar}>
                                <span className="bar-1" />
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link to="#" className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                <div className="widget">
                    <div className="logo">
                        <img src={logoLight2} alt="Chef's Special Logo" />
                    </div>
                    <p>
                        Welcome to Chef’s Special — your go-to destination for fusion flavors, comfort food, and unforgettable dining experiences. From sizzling noodles to gourmet pizza, we serve taste with heart in the heart of Uttara.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>Level-2, 1/B Gareeb-E-Nawaz Road, Sector-11,<br /> Above Sultan’s Dine, Uttara, Dhaka-1230</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>hello@chefsspecial.com</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <strong>+880 1755-601407</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form onSubmit={handleForm}>
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete="off" required />
                            <span className="input-group-addon">
                                <button type="submit">
                                    <i className="fas fa-arrow-right" />
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShareV2 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;
