import { Route, Routes } from "react-router-dom";
import Home2Page from "./pages/homePages/Home2";


import FoodMenuPage from "./pages/FoodPage/FoodMenu";

import ShopPage from "./pages/shopPage/ShopPage";
import ShopSingleThumbPage from "./pages/shopPage/ShopSingleThumbPage";
import ShopSinglePage from "./pages/shopPage/ShopSinglePage";


import Blog3ColumnPage from "./pages/blogPages/Blog3ColumnPage";
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebar";
// sss
import ContactPage from "./pages/innerPages/ContactPage";
import NotFoundPage from "./pages/innerPages/NotFoundPage";
import ChefDetailsPage from "./pages/innerPages/ChefDetailsPage";
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ChefPage from "./pages/innerPages/ChefPage";
import ReservationPage from "./pages/innerPages/ReservationPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home2Page />} ></Route>
       

                <Route path="/about-us" element={<AboutUsPage />} ></Route>
                <Route path="/chef" element={<ChefPage />} ></Route>
                <Route path="/reservation" element={<ReservationPage />} ></Route>
                <Route path="/food-menu" element={<FoodMenuPage />} ></Route>
                <Route path='/blog' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single-with-sidebar/:id' element={<BlogSingleWithSidebarPage />}></Route>
                <Route path="/contact" element={<ContactPage />} ></Route>
                <Route path="/chef-details/:id" element={<ChefDetailsPage />} ></Route>
                <Route path='/shop-single-thumb/:id' element={<ShopSingleThumbPage />}></Route>
                <Route path='/shop' element={<ShopPage />}></Route>
                <Route path='/shop?:page?' element={<ShopPage />}></Route>
                <Route path='/shop-single/:id' element={<ShopSinglePage />}></Route>
        

                <Route path="*" element={<NotFoundPage />} ></Route>
            </Routes>
        </>
    );
};

export default Routers;