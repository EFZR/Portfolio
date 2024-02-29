import "../styles/About.css";
import { Link } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";
import csharp from "../assets/about-csharp.svg";
import javascript from "../assets/about-javascript.svg";
import html from "../assets/about-html.svg";
import css from "../assets/about-css.svg";
import django from "../assets/about-django.svg";
import flask from "../assets/about-flask.svg";
import git from "../assets/about-git.svg";
import github from "../assets/about-github.svg";
import python from "../assets/about-python.svg";
import react from "../assets/about-react.svg";
import tailwind from "../assets/about-tailwind-css.svg";
import vite from "../assets/about-vite.svg";
import mysql from "../assets/about-mysql.svg";
import rust from "../assets/about-rust.svg";
import nodejs from "../assets/about-nodejs.svg";
import firebase from "../assets/about-firebase.svg";

function About() {
  return (
    <>
      <section className="about section">
        <h2 className="section__title">Personal Information</h2>
        <div className="about__container about__page container grid">
          <ProfileImage />
          <div className="about__content grid">
            <div className="about__data grid">
              <div className="about__info grid">
                <h1 className="about__name">Emerson Zapata Rivas</h1>
                <h2 className="about__profession">Jr. Full stack developer</h2>
                <p className="about__description">
                  As a Developer, I am constantly <b>seeking opportunities</b>{" "}
                  to enhance my skills in the realm of programming. My passion
                  for technology and coding drives me to embrace and take on{" "}
                  <b>new challenges and experiences</b>, fostering continuous
                  growth and learning.
                </p>
              </div>

              <Link to="/contact" className="about__button button">
                Contact Me
              </Link>
            </div>

            <div className="about__skills">
              <h3 className="about__skills-title">My Skills Are</h3>
              <div className="about__skills-content grid">
                <img src={rust} alt="rust" className="about__skills-img" />
                <img src={python} alt="python" className="about__skills-img" />
                <img src={csharp} alt="csharp" className="about__skills-img" />
                <img src={django} alt="django" className="about__skills-img" />
                <img src={flask} alt="flask" className="about__skills-img" />
                <img src={react} alt="react" className="about__skills-img" />
                <img src={css} alt="css" className="about__skills-img" />
                <img src={html} alt="html" className="about__skills-img" />
                <img
                  src={javascript}
                  alt="javascript"
                  className="about__skills-img"
                />
                <img src={vite} alt="vite" className="about__skills-img" />
                <img
                  src={tailwind}
                  alt="tailwind"
                  className="about__skills-img"
                />
                <img src={mysql} alt="mysql" className="about__skills-img" />
                <img src={firebase} alt="firebase" className="about__skills-img" />
                <img src={nodejs} alt="nodejs" className="about__skills-img" />
                <img src={git} alt="git" className="about__skills-img" />
                <img src={github} alt="github" className="about__skills-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
