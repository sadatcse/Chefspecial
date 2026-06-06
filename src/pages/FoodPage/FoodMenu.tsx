import { Helmet } from "react-helmet-async";
import FeatureV1 from "../../components/feature/FeatureV1";
import LayoutV5 from "../../components/layouts/LayoutV5";
import MenuIsotope from "../../components/menu/MenuIsotope";
import ReservationV2 from "../../components/reservation/ReservationV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const FoodMenuPage = () => {
    return (
        <>
            <Helmet>
                <title>Food Menu | Chef's Special</title>
                <meta name="description" content="Browse the full food menu of Chef's Special including appetizers, mains, desserts, and more." />
                <meta name="keywords" content="Chef's Special Menu, Food Menu, Dishes, Meals, Restaurant Menu" />
                <meta property="og:title" content="Food Menu | Chef's Special" />
                <meta property="og:description" content="Explore our delicious food menu and make a reservation today." />
            </Helmet>

            <LayoutV5 title="Food Menu" breadCrumb="food-menu">
                <MenuIsotope sectionClass="bg-gray" />
                <ReservationV2 />
                <TestimonialV1 sectionClass="bg-dark text-light" />
                <FeatureV1 sectionClass="default-padding" />
            </LayoutV5>
        </>
    );
};

export default FoodMenuPage;
