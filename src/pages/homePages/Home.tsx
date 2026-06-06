import AboutV3 from "../../components/about/AboutV3";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV3 from "../../components/banner/BannerV3";
import BlogV1 from "../../components/blog/BlogV1";
import FactV1 from "../../components/fact/FactV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import MenuV1 from "../../components/menu/MenuV1";
import ProductV1 from "../../components/product/ProductV1";
import ReservationV2 from "../../components/reservation/ReservationV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home = () => {
    return (
        <>
            <LayoutV1>
                <BannerV3 />
                <AboutV3 />
                <MenuV1 />
                <FactV1 />
                <ProductV1 />
                <ReservationV2 />
                <TestimonialV1 sectionClass="bg-dark text-light" />
                <FeatureV1 />
                <BlogV1 />
                <CursorEffect/>
            </LayoutV1>
        </>
    );
};

export default Home;