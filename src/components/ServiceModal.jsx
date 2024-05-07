import usePortfolio from "../hooks/usePortfolio";
import { BiX } from "react-icons/bi";

function ServiceModal() {
  const { showModal, setShowModal, dataModal } = usePortfolio();
  const { title, list, modalTitle } = dataModal;
  return (
    <div className={`services__modal ${showModal && "active-modal"}`}>
      <div className="services__modal-content">
        <BiX
          className="services__modal-close"
          onClick={() => {
            setShowModal(false);
          }}
        />
        <h2 className="services__modal-title">{modalTitle}</h2>
        <ul className="services__modal-list grid">
          {list?.map((item, index) => (
            <li className="services__modal-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceModal;
