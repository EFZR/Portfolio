import { Outlet } from "react-router-dom";
import PortfolioProvider from "../context/PortfolioProvider";
import Header from "./Header";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";

function Layout() {
  return (
    <>
      <PortfolioProvider>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
        <ScrollUp />
      </PortfolioProvider>
    </>
  );
}

export default Layout;
