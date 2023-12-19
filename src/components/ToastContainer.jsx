import useToast from "../hooks/useToast";
import { BiError, BiCheck } from "react-icons/bi";
import "../styles/ToastContainer.css";

function ToastContainer() {
  const { toastAlert } = useToast();

  return (
    <div
      className={`toast__container ${
        toastAlert.length > 0 ? "toast__active" : ""
      }`}
    >
      {toastAlert.map((alert) => (
        <div
          key={alert.id}
          className={`toast__alert toast__alert-${alert.type}`}
        >
          {alert.type === "error" ? (
            <BiError className="toast__icon" />
          ) : (
            <BiCheck className="toast__icon" />
          )}
          {alert.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
