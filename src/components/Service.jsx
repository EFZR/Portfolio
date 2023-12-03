import "../styles/Service.css";
import { Fragment } from "react";
import { SERVICE } from "../constants";
import ServiceModal from "./ServiceModal";
import usePortfolio from "../hooks/usePortfolio";

function Service() {
  const { setShowModal, setDataModal } = usePortfolio();
  return (
    <section className="services section">
      <h2 className="section__title">The Services I offer</h2>
      <div className="services__container container grid">
        {SERVICE.map((service, index) => (
          <Fragment key={index}>
            <article className="services__card">
              <service.icon className="services__icon" />
              <h2 className="services__title">{service.title}</h2>
              <p className="services__description">{service.description}</p>
              <button
                className="services__button button"
                onClick={() => {
                  setShowModal(true);
                  setDataModal(service);
                }}
              >
                Know More
              </button>
            </article>
          </Fragment>
        ))}
      </div>
      <ServiceModal />
    </section>
  );
}

export default Service;
