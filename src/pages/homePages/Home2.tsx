import CursorEffect from "../../components/animation/CursorEffect";
import BannerV4 from "../../components/banner/BannerV4";
import BlogV1 from "../../components/blog/BlogV1";
import BrandV1 from "../../components/brand/BrandV1";
import FeatureV2 from "../../components/feature/FeatureV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import LayoutV2 from "../../components/layouts/LayoutV2";
import MenuV5 from "../../components/menu/MenuV5";
import OfferV2 from "../../components/offer/OfferV2";
import ShopV1 from "../../components/shop/ShopV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import { Helmet } from "react-helmet-async";
const Home2Page = () => {
    return (
        <>

                  <Helmet>
                <title>Chef's Special Restaurant | Dine-In, Takeaway & Delivery in Uttara </title>
                <meta name="description" content="Explore delicious dishes, offers, and the best customer reviews at Chef's Special restaurant." />
                <meta name="keywords" content="Chef's Special, Restaurant, Food, Offers, Testimonials" />
                <meta property="og:title" content="Chef's Special | Home" />
                <meta property="og:description" content="Discover amazing food and deals at Chef's Special!" />
            </Helmet>
            <LayoutV2>
                <BannerV4 />
                <MenuV5 />
                <FeatureV2 />
                <ShopV1 />
                <TestimonialV2 sectionClass='bg-shape-4' />
                <GalleryV2 />
                
                <OfferV2 />
                   <BrandV1 />
                <BlogV1 />
             
                <CursorEffect/>
            </LayoutV2>
        </>
    );
};

export default Home2Page;