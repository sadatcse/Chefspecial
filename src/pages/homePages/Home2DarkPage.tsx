import CursorEffect from "../../components/animation/CursorEffect";
import BannerV4 from "../../components/banner/BannerV4";
import BlogV1 from "../../components/blog/BlogV1";
import BrandV1 from "../../components/brand/BrandV1";
import BodyDark from "../../components/classes/BodyDark";
import FeatureV2 from "../../components/feature/FeatureV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import LayoutV2 from "../../components/layouts/LayoutV2";
import MenuV5 from "../../components/menu/MenuV5";
import OfferV1 from "../../components/offer/OfferV1";
import ShopV1 from "../../components/shop/ShopV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";

const Home2DarkPage = () => {
    return (
        <>
            <LayoutV2>
                <BannerV4 />
                <MenuV5 />
                <FeatureV2 />
                <ShopV1 />
                <TestimonialV2 sectionClass='bg-shape-4' isDark={true} />
                <GalleryV2 />
                <BrandV1 />
                <OfferV1 />
                <BlogV1 />
                <CursorEffect />
                <BodyDark />
            </LayoutV2>
        </>
    );
};

export default Home2DarkPage;