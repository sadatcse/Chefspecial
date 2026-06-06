import { Helmet } from "react-helmet-async";
import LayoutV5 from "../../components/layouts/LayoutV5";
import ShopSingleThumbContent from "../../components/shop/ShopSingleThumbContent";
import ProductData from "../../assets/jsonData/product/ProductData.json";
import { useParams } from "react-router-dom";

const ShopSingleThumbPage = () => {
    const { id } = useParams();
    const data = ProductData.find(product => product.id === parseInt(id || '0'));

    return (
        <>
            {data && (
                <Helmet>
                    <title>{data.name} | Chef's Special</title>
                    <meta
                        name="description"
                        content={`Order ${data.name} now for just ৳${data.price}. ${data.tags?.join(", ")} - available at Chef's Special.`}
                    />
                    <meta name="keywords" content={`${data.tags?.join(", ")}, ${data.name}, Chef's Special`} />
                    <meta property="og:title" content={`${data.name} | Chef's Special`} />
                    <meta property="og:description" content={`Delicious ${data.name} available now at Chef's Special for ৳${data.price}.`} />
                </Helmet>
            )}

            <LayoutV5 title={data?.name || "Product Not Found"} breadCrumb="shop-single-thumb">
                {data && <ShopSingleThumbContent productInfo={data} />}
                {!data && <div>No Data Found</div>}
            </LayoutV5>
        </>
    );
};

export default ShopSingleThumbPage;
