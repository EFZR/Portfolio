import { ACHIVEMENT } from "../constants/index";
import { useLocation } from "react-router-dom";
import "../styles/Achivement.css";

function Achivement() {
  const location = useLocation();
  return (
    <section className="section achivement">
      <h2 className="section__title">Certification Achivements</h2>
      <div
        className={`achivement__container container grid ${
          location.pathname === "/work" && "portfolio__page"
        }`}
      >
        {ACHIVEMENT.map((achivement, index) => (
          <article className="achivement__card grid" key={index}>
            <img
              src={achivement.image}
              alt="image"
              className="achivement__img"
            />
            <h2 className="achivement__title">{achivement.title}</h2>
            <span className="achivement__subtitle">{achivement.subtitle}</span>
            <a
              href={achivement.link}
              target="_blank"
              className="achivement__button button"
            >
              Check Out
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achivement;
