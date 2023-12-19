import { Outlet } from "react-router-dom";
import PortfolioProvider from "../context/PortfolioProvider";
import ToastProvider from "../context/ToastProvider";
import Header from "./Header";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";
import ToastContainer from "./ToastContainer";

function Layout() {
  return (
    <>
      <PortfolioProvider>
        <ToastProvider>
          <Header />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
          <ScrollUp />
          <ToastContainer />
        </ToastProvider>
      </PortfolioProvider>
    </>
  );
}

export default Layout;
