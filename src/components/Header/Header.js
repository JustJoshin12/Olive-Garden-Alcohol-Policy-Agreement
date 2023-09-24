import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = ({ shiftTime }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/Olive-Garden-Alcohol-Policy-Agreement">
        <img className="header__logo logo" src={logo} alt="logo" />
      </Link>
      <h1 className="header__title title">
        Daily Verification of responsible <br />
        service of Alcohol Policy.
      </h1>
      <p className="header__date date">
        {currentDate} {shiftTime}
        <Link to="/Olive-Garden-Alcohol-Policy-Agreement/search">
        <button className="w-[30px] h-[30px]"></button>
        </Link>
      </p>
    </header>
  );
};

export default Header;
