import { useState } from "react";
import emailjs from "@emailjs/browser";
import BannerText from "../../components/BannerText/BannerText";

function Contact() {
  /*Etat des champs du formulaire à envoyer*/
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  /*Status du message de succès ou d'érreur lors de l'envoie d'un message */
  const [status, setStatus] = useState(null);

  /*Fonction pour mettre à jour les données du formulaire à envoyer après chaque saisie */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*Fonction qui gére l'envoie des donnéés du formulaire à EmailJS */
  const handleSubmit = (e) => {
    /*Pas de rechargement de la page */
    e.preventDefault();
    /*Appel à EmailJS */
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        /*Données du formulaire */
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          /*Message succès */
          setStatus("Email envoyé avec succès !");
          /*Réinitialisation du formulaire */
          setFormData({
            email: "",
            name: "",
            subject: "",
            message: "",
          });
        },
        /*Message erreur */
        () => setStatus("Erreur lors de l'envoi de l'email.")
      );
  };

  return (
    <div>
      <BannerText message={"CONTACTEZ MOI / "} id={"contact"} />
      <section className="contact-page">
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <h2 tabIndex="7">
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
                tabIndex="8"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                tabIndex="9"
              />
              <input
                type="text"
                name="subject"
                placeholder="Objet"
                value={formData.subject}
                onChange={handleChange}
                required
                tabIndex="10"
              />
            </div>
            <textarea
              name="message"
              placeholder="Votre message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              tabIndex="11"
            />
            <button type="submit" tabIndex="12">
              Envoyer
            </button>
          </form>
          <div className="status">{status && <p>{status}</p>}</div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
