import { useState } from "react";
import emailjs from "@emailjs/browser";

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Email envoyé avec succès !");
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
        },
        () => setStatus("Erreur lors de l'envoi de l'email.")
      );
  };

  return (
    <div>
      <section className="contact-page">
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <h2>
              Vous avez un projet en tête ? Faisons-le ensemble ! <br></br>{" "}
              Contactez-moi pour donner vie à vos idées !
            </h2>
            <div className="info-email">
              <input
                type="name"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
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
            <button type="submit">Envoyer</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </section>
    </div>
  );
}

export default Contact;
