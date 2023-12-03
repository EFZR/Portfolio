import usePortfolio from "../hooks/usePortfolio";
import useScrollY from "../hooks/useScrollY";
import useDarkMode from "../hooks/useDarkMode";
import { Link, useLocation } from "react-router-dom";
import { BiX, BiGridAlt, BiMoon, BiSun } from "react-icons/bi";
import "../styles/Header.css";

function Header() {
  const { showMenu, setShowMenu, darkTheme, setDarkTheme } = usePortfolio();
  const location = useLocation();
  const scrollY = useScrollY();
  useDarkMode(darkTheme);
  return (
    <header
      className={`header ${
        location.pathname !== "/" || scrollY > 75 ? "bg-header" : ""
      }`}
    >
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          EFZR
        </Link>
        <div className={`nav__menu ${showMenu && "show-menu"}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/about"
                className="nav__link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                About me
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/work"
                className="nav__link"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                className="button"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className="nav__close">
            <BiX onClick={() => setShowMenu(false)} />
          </div>
        </div>

        <div className="nav__actions">
          {darkTheme ? (
            <BiSun
              className="nav__change-theme"
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            />
          ) : (
            <BiMoon
              className="nav__change-theme"
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            />
          )}
          <div className="nav__toggle">
            <BiGridAlt onClick={() => setShowMenu(true)} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
