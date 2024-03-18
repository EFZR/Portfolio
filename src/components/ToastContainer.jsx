import useToast from "../hooks/useToast";
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
          className={`toast__alert toast__alert-${alert.type[1]}`}
        >
          {alert.type[0]}
          {alert.message}
        </div>
      ))}
    </div>
  );
}

export default ToastContainer;
