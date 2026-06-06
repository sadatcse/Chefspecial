// import { Link } from "react-router-dom";

// interface DataType {
//   navbarPlacement?: string;
//   toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
// }

// const MainMenu: React.FC<DataType> = ({ navbarPlacement = "", toggleSubMenu }) => {
//   return (
//     <ul
//       className={`nav navbar-nav ${navbarPlacement}`}
//       data-in="fadeInDown"
//       data-out="fadeOutUp"
//     >
//       <li>
//         <Link to="/" className="active">
//           Home
//         </Link>
//       </li>

//       <li className="dropdown">
//         <Link
//           to="#"
//           className="dropdown-toggle"
//           data-toggle="dropdown"
//           onClick={toggleSubMenu}
//         >
//           About
//         </Link>
//         <ul className="dropdown-menu">
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           <li>
//             <Link to="/chef">Our Chef's</Link>
//           </li>
//           <li>
//             <Link to="/reservation">Reservation</Link>
//           </li>
//         </ul>
//       </li>

//       <li>
//         <Link to="/food-menu">Menu</Link>
//       </li>

//       <li>
//         <Link to="/blog">Blog</Link>
//       </li>

//       <li>
//         <Link to="/contact">Contact Us</Link>
//       </li>
//     </ul>
//   );
// };

// export default MainMenu;

interface DataType {
  navbarPlacement?: string;
  toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu: React.FC<DataType> = ({ navbarPlacement = "", toggleSubMenu }) => {
  return (
    <ul
      className={`nav navbar-nav ${navbarPlacement}`}
      data-in="fadeInDown"
      data-out="fadeOutUp"
    >
      <li>
        <a href="/" className="active">
          Home
        </a>
      </li>

      <li className="dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleSubMenu}
        >
          About
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/chef">Our Chef's</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="/food-menu">Menu</a>
      </li>

      <li>
        <a href="/blog">Blog</a>
      </li>

      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </ul>
  );
};

export default MainMenu;
