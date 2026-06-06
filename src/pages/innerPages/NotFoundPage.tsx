
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV5 from "../../components/layouts/LayoutV5";
import NotFoundContent from "../../components/NotFound/NotFoundContent";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>

            <LayoutV5>
                <BreadCrumb title="Error Page" breadCrumb="not-found" />
                <NotFoundContent />
            </LayoutV5>
        </>
    );
};

export default NotFoundPage;
