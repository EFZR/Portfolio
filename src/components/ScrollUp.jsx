import { BiUpArrowAlt } from "react-icons/bi";
import useScrollY from "../hooks/useScrollY";
import "../styles/ScrollUp.css";

function ScrollUp() {
  const scrollY = useScrollY();
  return (
    <a href="#" className={`scrollup ${scrollY > 100 && "show-scrollup"}`}>
      <BiUpArrowAlt />
    </a>
  );
}

export default ScrollUp;
