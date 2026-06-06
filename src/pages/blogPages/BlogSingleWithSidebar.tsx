import { Helmet } from "react-helmet-async";
import BlogSingleWithSidebarContent from "../../components/blog/BlogSingleWithSidebarContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV5 from "../../components/layouts/LayoutV5";
import BlogData from '../../assets/jsonData/blog/BlogData.json';
import { useParams } from "react-router-dom";

const BlogSingleWithSidebarPage = () => {
    const { id } = useParams();
    const data = BlogData.find(blog => blog.id === parseInt(id || '0'));

    return (
        <>
            {data && (
                <Helmet>
                    <title>{data.title} | Chef's Special</title>
                    <meta name="description" content={data.text.slice(0, 150) + "..."} />
                    <meta name="keywords" content={`${data.tag}, Chef's Special, Blog`} />
                    <meta property="og:title" content={`${data.title} | Chef's Special`} />
                    <meta property="og:description" content={data.text.slice(0, 150) + "..."} />
               <meta property="og:image" content={`https://chefsspecial.restaurant/assets/img/blog/${data.thumbFull}`} />
                </Helmet>
            )}

            <LayoutV5 title={data?.title || "Blog Not Found"} breadCrumb="blog-single-with-sidebar">
                {data ? <BlogSingleWithSidebarContent blogInfo={data} /> : <div>No Data Found</div>}
                <BodyWrapper />
            </LayoutV5>
        </>
    );
};

export default BlogSingleWithSidebarPage;
