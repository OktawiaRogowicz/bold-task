import Heading from "../../components/heading/index.jsx";
import Text from "../../components/text/index.jsx";

import "./index.css";
import ContactForm from "./components/ContactForm/index.jsx";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__description-container">
          <Heading level={2} color="black">
            Contact
          </Heading>
          <Text color="black" size="14px">
            Questions or concerns? Just fill out the form below and our support
            team will get back to you within 24 hours
          </Text>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
