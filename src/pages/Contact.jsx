import { collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePortfolio from "../hooks/usePortfolio";
import useToast from "../hooks/useToast";
import db from "../config/firebase";
import "../styles/Contact.css";

function Contact() {
  const { formData, handleInputChange, clearForm } = usePortfolio();
  const { successToast, errorToast, warningToast } = useToast();
  const location = useLocation();
  const { name, email, message } = formData;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearForm();
  }, [location.pathname]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (Object.values(formData).includes("")) {
        throw new Error("Please fill all the fields.");
      }
      const inbox = collection(db, "inbox");
      warningToast("Sending message...");
      setLoading(true);
      await addDoc(inbox, formData).finally(() => {
        setLoading(false);
      });
      clearForm();
      successToast("Message sent successfully");
    } catch (error) {
      errorToast(error.message);
    }
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Let's Work <br /> Together
      </h2>

      <div className="contact__page container grid">
        <form className="contact__form grid" onSubmit={handleSubmit}>
          <div className="contact__group grid">
            <div className="contact__box">
              <input
                id="user_name"
                name="name"
                type="text"
                className="contact__input"
                placeholder="Write your name"
                value={name}
                onChange={handleInputChange}
                disabled={loading}
              />
              <label htmlFor="user_name" className="contact__label">
                Name
              </label>
            </div>
            <div className="contact__box">
              <input
                id="user_email"
                name="email"
                type="email"
                className="contact__input"
                placeholder="Write your email"
                value={email}
                onChange={handleInputChange}
                disabled={loading}
              />
              <label htmlFor="user_email" className="contact__label">
                Email address
              </label>
            </div>
          </div>
          <div className="contact__box contact__area">
            <textarea
              id="user_message"
              name="message"
              className="contact__input"
              placeholder="Write your message"
              value={message}
              onChange={handleInputChange}
              disabled={loading}
            ></textarea>
            <label htmlFor="user_message" className="contact__label">
              Message
            </label>
          </div>
          <button
            type="submit"
            className="contact__send button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
