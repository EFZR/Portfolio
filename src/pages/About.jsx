import "../styles/About.css";
import { Link } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";
import AboutCsharp from "../svg/about-csharp";
import AboutCss from "../svg/about-css";
import AboutDjango from "../svg/about-django";
import AboutDotnet from "../svg/about-dotnet";
import AboutFirebase from "../svg/about-firebase";
import AboutFlask from "../svg/about-flask";
import AboutGit from "../svg/about-git";
import AboutGithub from "../svg/about-github";
import AboutHtml from "../svg/about-html";
import AboutJavascript from "../svg/about-javascript";
import Aboutmysql from "../svg/about-mysql";
import AboutNodejs from "../svg/about-nodejs";
import AboutPython from "../svg/about-python";
import AboutReact from "../svg/about-react";
import AboutRust from "../svg/about-rust";
import AboutTailwindCss from "../svg/about-tailwind-css";
import AboutTokio from "../svg/about-tokio";
import AboutVite from "../svg/about-vite";

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
                <AboutRust />
                <AboutTokio />
                <AboutPython />
                <AboutDjango />
                <AboutFlask />
                <AboutCsharp />
                <AboutDotnet />
                <AboutNodejs />
                <AboutReact />
                <AboutJavascript />
                <AboutHtml />
                <AboutCss />
                <AboutTailwindCss />
                <AboutVite />
                <AboutGit />
                <AboutGithub />
                <AboutFirebase />
                <Aboutmysql />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
