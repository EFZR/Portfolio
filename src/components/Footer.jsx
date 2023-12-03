import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <Link to="/" className="footer__logo">
            EFZR
          </Link>
          <ul className="footer__links">
            <li>
              <Link to="/about" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/work" className="footer__link">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                Portfolio
              </Link>
            </li>
          </ul>
          <div className="footer__social">
            <a
              href="https://github.com/EFZR"
              target="_blank"
              className="footer__social-link"
            >
              <BiLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emerson-zapata-1b5485232/"
              target="_blank"
              className="footer__social-link"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://www.instagram.com/emerson.zapatarivas/"
              target="_blank"
              className="footer__social-link"
            >
              <BiLogoInstagram />
            </a>
          </div>
        </div>

        <span className="footer__copy">
          © 2021 Emerson Zapata. All right reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
