import { useState } from "react";
import emailjs from "emailjs-com";
import BannerText from "../../components/BannerText/BannerText";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Remplace par ton service ID
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Remplace par ton template ID
        formData,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_EMAILJS_USER_ID // Remplace par ton user ID
      )
      .then(
        () => setStatus("Email envoyé avec succès !"),
        () => setStatus("Erreur lors de l'envoi de l'email.")
      );
  };

  return (
    <div>
      <BannerText message={"ME CONTACTER / "}/>
      <section className="contact-page">
          <div className="contact">
              <form onSubmit={handleSubmit}>
                  <div className="info-email">
                      <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                      />
                      <input
                          type="text"
                          name="subject"
                          placeholder="Objet"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                      />
                  </div>
                  <textarea
                      name="message"
                      placeholder="Votre message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                  />
                  <button type="submit">
                      Envoyer
                  </button>
              </form>
              {status && <p>{status}</p>}
          </div>
      </section>
    </div>
  );
}

export default Contact