import { Helmet } from "react-helmet-async";
import Blog3ColumnContent from "../../components/blog/Blog3ColumnContent";
import BodyWrapper from "../../components/classes/BodyWrapper";
import LayoutV5 from "../../components/layouts/LayoutV5";

const Blog3ColumnPage = () => {
  return (
    <>
      <Helmet>
        <title>Latest Blog | Chef's Special</title>
        <meta
          name="description"
          content="Read the latest blog posts from Chef's Special covering recipes, cooking tips, restaurant news, and more."
        />
        <meta
          name="keywords"
          content="Chef's Special Blog, Recipes, Cooking Tips, Food News, Restaurant Blog"
        />
        <meta property="og:title" content="Latest Blog | Chef's Special" />
        <meta
          property="og:description"
          content="Stay updated with the newest recipes, tips, and food stories from Chef's Special."
        />
      </Helmet>

      <LayoutV5 breadCrumb="blog-3-column" title="Latest Blog">
        <Blog3ColumnContent />
        <BodyWrapper />
      </LayoutV5>
    </>
  );
};

export default Blog3ColumnPage;
