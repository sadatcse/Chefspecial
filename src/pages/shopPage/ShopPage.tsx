import { Helmet } from "react-helmet-async";
import LayoutV5 from "../../components/layouts/LayoutV5";
import ShopPageContent from "../../components/shop/ShopPageContent";

const ShopPage = () => {
    return (
        <>
            <Helmet>
                <title>Shop | Chef's Special</title>
                <meta name="description" content="Browse and order your favorite dishes from the Chef's Special online shop. Fast, fresh, and flavorful." />
                <meta name="keywords" content="Chef's Special Shop, Order Food Online, Buy Dishes, Restaurant Shop" />
                <meta property="og:title" content="Shop | Chef's Special" />
                <meta property="og:description" content="Explore and purchase our special food items directly from our shop." />
            </Helmet>

            <LayoutV5 title="Special Food" breadCrumb="shop">
                <ShopPageContent />
            </LayoutV5>
        </>
    );
};

export default ShopPage;
