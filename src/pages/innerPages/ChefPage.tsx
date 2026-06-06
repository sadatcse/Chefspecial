import { Helmet } from "react-helmet-async";
import ChefFull from "../../components/chef/ChefFull";
import LayoutV5 from "../../components/layouts/LayoutV5";

const ChefPage = () => {
    return (
        <>
            <Helmet>
                <title>Restaurant Chef - Meet Our Culinary Experts</title>
                <meta
                    name="description"
                    content="Explore our team of expert chefs at the restaurant. Discover their skills, specialties, and culinary journeys."
                />
            </Helmet>

            <LayoutV5 breadCrumb="chef" title="Restaurant Chef">
                <ChefFull />
            </LayoutV5>
        </>
    );
};

export default ChefPage;
