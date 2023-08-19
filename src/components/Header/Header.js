import "./Header.css"
import logo from "../../images/logo.png"

const Header = ({shiftTime}) => {
    const currentDate = new Date().toLocaleString("default", {
        month: "long",
        day: "numeric",
      });

    return (
        <header className="header">
            <img className="header__logo logo" src={logo} alt="logo image"/>
            <h1 className="header__title title">Daily Verification of responsible <br/>service of Alcohol Policy.</h1>
            <p className="header__date date">{currentDate} {shiftTime}</p>
        </header>
    )
}

export default Header