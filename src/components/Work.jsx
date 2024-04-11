import { BiRightArrowCircle } from "react-icons/bi";
import useObserver from "../hooks/useObserver";
import { WORK } from "../constants/index";
import "../styles/Work.css";

function Work() {
  useObserver()
  return (
    <section className="work section">
      <h2 className="section__title">My Most Recent Works</h2>
      <div
        className="work__container container grid"
      >
        {WORK.map((work, index) => (
          <article className="work__card" observe="true" key={index}>
            <a href={work.link} target="_blank" className="work__link">
              <img src={work.image} alt="work" className="work__img" />
              <BiRightArrowCircle className="work__icon" />
            </a>
            <h2 className="work__title">{work.title}</h2>
            <span className="work__subtitle">{work.subtitle}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
