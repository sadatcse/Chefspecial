import AboutV2 from "../../components/about/AboutV2";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV2 from "../../components/banner/BannerV2";
import BlogV1 from "../../components/blog/BlogV1";
import FoodCategoryV1 from "../../components/categories/FoodCategoryV1";
import LayoutV3 from "../../components/layouts/LayoutV3";
import MenuV2 from "../../components/menu/MenuV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import VideoV2 from "../../components/videos/VideoV2";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";

const Home3Page = () => {
    return (
        <>
            <LayoutV3>
                <BannerV2 />
                <MenuV2 />
                <AboutV2 />
                <FoodCategoryV1 />
                <WhyChooseV1 />
                <VideoV2 />
                <TestimonialV1 sectionClass="bg-gray bg-cover bg-shape-4" />
                <BlogV1 />
                <CursorEffect />
            </LayoutV3>
        </>
    );
};

export default Home3Page;