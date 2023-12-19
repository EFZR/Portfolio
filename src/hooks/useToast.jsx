import { ToastContext } from "../context/ToastProvider";
import { useContext } from "react";

function useToast() {
  return useContext(ToastContext);
}

export default useToast;