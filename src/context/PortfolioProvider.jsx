import { createContext, useState } from "react";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        showMenu,
        setShowMenu,
        showModal,
        setShowModal,
        dataModal,
        setDataModal,
        darkTheme,
        setDarkTheme,
        formData,
        handleInputChange,
        clearForm,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
