import { createContext, useState, useRef, useEffect } from "react";
import { toastTypes } from "../constants/index";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastAlert, setToastAlert] = useState([]);
  const toastRef = useRef(toastAlert);

  useEffect(() => {
    toastRef.current = toastAlert;
  }, [toastAlert]);

  const successToast = (message) => {
    const alert = {
      id: Math.random(),
      type: toastTypes.success,
      active: true,
      message,
    };
    setToastAlert([...toastAlert, alert]);
    setTimeout(() => {
      setToastAlert(toastRef.current.filter((a) => a.id !== alert.id));
    }, 2000);
  };

  const errorToast = (message) => {
    const alert = {
      id: Math.random(),
      type: toastTypes.error,
      message,
    };
    setToastAlert([...toastAlert, alert]);
    setTimeout(() => {
      setToastAlert(toastRef.current.filter((a) => a.id !== alert.id));
    }, 2000);
  };

  const warningToast = (message) => {
    const alert = {
      id: Math.random(),
      type: toastTypes.warning,
      message,
    };
    setToastAlert([...toastAlert, alert]);
    setTimeout(() => {
      setToastAlert(toastRef.current.filter((a) => a.id !== alert.id));
    }, 2000);
  };

  return (
    <ToastContext.Provider
      value={{
        toastAlert,
        successToast,
        errorToast,
        warningToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
