import  { useState } from "react";
import icon2 from "/assets/img/icon/2.png";
import thumbPasta from "/assets/img/thumb/pasta.png"; 
import thumbSoup from "/assets/img/thumb/soup.png"; 
import thumbPizza from "/assets/img/thumb/pizza.png"; 
import thumbBurger from "/assets/img/thumb/burger.png";
import thumbMainDishes from "/assets/img/thumb/main.png";

import { Link } from "react-router-dom";
import CountUp from "react-countup";

const MenuV5 = () => {
  const [activeTab, setActiveTab] = useState("pasta");

  const getImageForTab = () => {
    switch (activeTab) {
      case "pasta":
        return thumbPasta;
      case "soup":
        return thumbSoup;
      case "pizza":
        return thumbPizza;
      case "burgers":
        return thumbBurger;
      case "mainDishes":
        return thumbMainDishes;
      default:
        return thumbPasta;
    }
  };

  return (
    <>
      <div className="menu-style-five-area default-padding bg-cover">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="thumb-style-two">
                <div className="fun-fact-style-two mb-40">
                  <div className="icon">
                    <img src={icon2} alt="Image Not Found" />
                  </div>
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer">
                        <CountUp end={70} enableScrollSpy />
                      </div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Menu and Dishes</span>
                  </div>
                </div>
                <img
                  data-aos="fade-left"
                  src={getImageForTab()}
                  alt="Image Not Found"
                />
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <h4 className="sub-heading">Food Items</h4>
              <h2 className="title">Starters & Main Dishes</h2>
              <div className="food-menu-style-five-items mt-65" data-aos="fade-up">
                <ul
                  className="nav nav-tabs food-menu-five-navs"
                  id="myTab"
                  role="tablist"
                >
                                    <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "mainDishes" ? "active" : ""}`}
                      id="tab_5"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_5"
                      type="button"
                      role="tab"
                      aria-controls="tabs_5"
                      aria-selected={activeTab === "mainDishes"}
                      onClick={() => setActiveTab("mainDishes")}
                    >
                      Main Dishes
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "pasta" ? "active" : ""}`}
                      id="tab_1"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_1"
                      type="button"
                      role="tab"
                      aria-controls="tabs_1"
                      aria-selected={activeTab === "pasta"}
                      onClick={() => setActiveTab("pasta")}
                    >
                      Pasta
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "soup" ? "active" : ""}`}
                      id="tab_2"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_2"
                      type="button"
                      role="tab"
                      aria-controls="tabs_2"
                      aria-selected={activeTab === "soup"}
                      onClick={() => setActiveTab("soup")}
                    >
                      Soup
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "pizza" ? "active" : ""}`}
                      id="tab_3"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_3"
                      type="button"
                      role="tab"
                      aria-controls="tabs_3"
                      aria-selected={activeTab === "pizza"}
                      onClick={() => setActiveTab("pizza")}
                    >
                      Pizza
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === "burgers" ? "active" : ""}`}
                      id="tab_4"
                      data-bs-toggle="tab"
                      data-bs-target="#tabs_4"
                      type="button"
                      role="tab"
                      aria-controls="tabs_4"
                      aria-selected={activeTab === "burgers"}
                      onClick={() => setActiveTab("burgers")}
                    >
                      Burgers
                    </button>
                  </li>
  
                </ul>

                <div className="tab-content" id="myTabContent">
                  {/* Pasta */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pasta" ? "show active" : ""
                    }`}
                    id="tabs_1"
                    role="tabpanel"
                    aria-labelledby="tab_1"
                  >
                    <ul className="meal-items style-two">
                      {[
                        {
                          name: "Penne White Sauce Pasta",
                          price: "349৳",
                          desc:
                            "Cooked pasta, creamy sauce, chicken & mushroom, parmesan cheese",
                        },
                        {
                          name: "Penna All Arrabbiata",
                          price: "399৳",
                          desc:
                            "Arrabbiata sauce, chicken, mushroom, spices, vegetables & parmesan cheese",
                        },
                        {
                          name: "Baked Stuffed Pasta",
                          price: "439৳",
                          desc:
                            "Chicken & mushroom, creamy sauce, black olive & parmesan cheese",
                        },
                        {
                          name: "Baked Allo Scoglio (Seafood Pasta)",
                          price: "499৳",
                          desc: "Mixed seafood, spices & parmesan cheese",
                        },
                      ].map((item, i) => (
                        <li key={i}>
                          <div className="content">
                            <div className="top">
                              <div className="title">
                                <h4>
                                  <Link to="/shop">{item.name}</Link>
                                </h4>
                              </div>
                              <div className="price">
                                <span>{item.price}</span>
                              </div>
                            </div>
                            <div className="bottom">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Soup */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "soup" ? "show active" : ""
                    }`}
                    id="tabs_2"
                    role="tabpanel"
                    aria-labelledby="tab_2"
                  >
                    <ul className="meal-items style-two">
                      {[
                        {
                          name: "Cream of Mushroom Soup",
                          price: "390৳",
                          desc: "Mushroom stock, cream sauce, green oil, garlic bread",
                        },
                        {
                          name: "Cream of Seafood Soup",
                          price: "410৳",
                          desc: "Seafood stock, cream sauce, red oil, garlic bread",
                        },
                        {
                          name: "Thai & Thick Soup",
                          price: "360৳",
                          desc: "Chicken & prawn, mushroom, lemongrass, lemon juice",
                        },
                        {
                          name: "Thai Clear Soup",
                          price: "330৳",
                          desc:
                            "Mixed seafood, chicken, mushroom, lemongrass, lemon juice",
                        },
                      ].map((item, i) => (
                        <li key={i}>
                          <div className="content">
                            <div className="top">
                              <div className="title">
                                <h4>
                                  <Link to="/shop">{item.name}</Link>
                                </h4>
                              </div>
                              <div className="price">
                                <span>{item.price}</span>
                              </div>
                            </div>
                            <div className="bottom">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pizza */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pizza" ? "show active" : ""
                    }`}
                    id="tabs_3"
                    role="tabpanel"
                    aria-labelledby="tab_3"
                  >
                    <ul className="meal-type">
                      <li>8 Inches"</li>
                      <li>12 Inches"</li>
                    </ul>
                    <ul className="meal-items style-two">
                      {[
                        {
                          name: "BBQ Chicken Gourmet Pizza",
                          price8: "415৳",
                          price12: "690৳",
                          desc:
                            "Diced chicken, napolitano sauce, black olive, capsicum, sliced onion & cheese",
                        },
                        {
                          name: "Chicken Fajita Pizza",
                          price8: "390৳",
                          price12: "650৳",
                          desc:
                            "Spicy chicken, onion, black olive, capsicum, chilli flax & cheese",
                        },
                        {
                          name: "Seafood Gourmet Pizza",
                          price8: "430৳",
                          price12: "750৳",
                          desc:
                            "Mixed seafood, napolitano sauce, black olive, capsicum, onion & cheese",
                        },
                        {
                          name: "Beef Bolognese Gourmet Pizza",
                          price8: "630৳",
                          price12: "1,090৳",
                          desc:
                            "Minced beef, napolitano sauce, onion, black olive, capsicum, jalapeno, chilli flax & cheese",
                        },
                      ].map((item, i) => (
                        <li key={i}>
                          <div className="content">
                            <div className="top">
                              <div className="title">
                                <h4>
                                  <Link to="/shop">{item.name}</Link>
                                </h4>
                              </div>
                              <div className="price">
                                <span>{item.price8}</span>
                                <span>{item.price12}</span>
                              </div>
                            </div>
                            <div className="bottom">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Burgers */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "burgers" ? "show active" : ""
                    }`}
                    id="tabs_4"
                    role="tabpanel"
                    aria-labelledby="tab_4"
                  >
                    <ul className="meal-items style-two">
                      {[
                        {
                          name: "Crispy Chicken Burger",
                          price: "299৳",
                          desc: "Fried chicken, local lettuce, pickles, chefs special sauce",
                        },
                        {
                          name: "BBQ Chicken Burger",
                          price: "339৳",
                          desc: "BBQ chicken, local lettuce, pickles, chefs special sauce",
                        },
                        {
                          name: "Chicken Prego Burger",
                          price: "379৳",
                          desc: "Spicy chicken, local lettuce, pickles, chefs special sauce",
                        },
                        {
                          name: "Ground Beef Burger",
                          price: "349৳",
                          desc: "Minced beef, local lettuce, pickles, chefs special sauce",
                        },
                      ].map((item, i) => (
                        <li key={i}>
                          <div className="content">
                            <div className="top">
                              <div className="title">
                                <h4>
                                  <Link to="/shop">{item.name}</Link>
                                </h4>
                              </div>
                              <div className="price">
                                <span>{item.price}</span>
                              </div>
                            </div>
                            <div className="bottom">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Dishes */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "mainDishes" ? "show active" : ""
                    }`}
                    id="tabs_5"
                    role="tabpanel"
                    aria-labelledby="tab_5"
                  >
                    <ul className="meal-items style-two">
                      {[
                        {
                          name: "Sirloin Steak",
                          price: "1390৳",
                          desc:
                            "Marinated steak served with mashed potato & sauteed vegetables on top of bell pepper sauce.",
                        },
                        {
                          name: "Chicken Scalloppini",
                          price: "430৳",
                          desc:
                            "Slice of chicken cooked with creamy sauce served with potato & vegetables.",
                        },
                        {
                          name: "Norwegian Salmon Steak",
                          price: "1899৳",
                          desc:
                            "Imported norwegian salmon, mashed potato, sauteed vegetables served with lemon butter sauce.",
                        },
                        {
                          name: "Beef Bolognese Gourmet Pizza (12 inches)",
                          price: "1,090৳",
                          desc:
                            "Minced beef, napolitano sauce, onion, black olive capsicum, jalapino, chilli flax, & cheese.",
                        },
                      ].map((item, i) => (
                        <li key={i}>
                          <div className="content">
                            <div className="top">
                              <div className="title">
                                <h4>
                                  <Link to="/shop">{item.name}</Link>
                                </h4>
                              </div>
                              <div className="price">
                                <span>{item.price}</span>
                              </div>
                            </div>
                            <div className="bottom">
                              <p>{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuV5;
