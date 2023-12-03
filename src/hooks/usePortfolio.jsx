import { PortfolioContext } from "../context/PortfolioProvider";
import { useContext } from "react";

function usePortfolio() {
  return useContext(PortfolioContext);
}

export default usePortfolio;
