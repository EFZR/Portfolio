import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { Link } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";
import Work from "../components/Work";
import Service from "../components/Service";
import Achivement from "../components/Achivement";
import cv from "../assets/efzr-cv.pdf";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <section className="home section">
        <div className="home__rectangle"></div>
        <div className="home__container container grid">
          <ProfileImage />
          <div className="home__content grid">
            <div className="home__data grid">
              <h1 className="home__name">Emerson</h1>
              <h2 className="home__profession">Jr. Full stack developer</h2>
              <div className="home__social">
                <a
                  href="https://github.com/EFZR"
                  target="_blank"
                  className="home__social-link"
                >
                  <BiLogoGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/emerson-zapata-1b5485232/"
                  target="_blank"
                  className="home__social-link"
                >
                  <BiLogoLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/emerson.zapatarivas/"
                  target="_blank"
                  className="home__social-link"
                >
                  <BiLogoInstagram />
                </a>
              </div>
            </div>
            <a href={cv} download className="home__button button">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <Service />
      <Work />

      <section className="contact section">
        <div className="home__container-contact container grid">
          <h2 className="section__title">
            Let's Work <br /> Together
          </h2>
          <Link to="/contact" className="home__button button">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
