import {useState} from "react";

import FormInput from "../../components/formInput/index.jsx";
import Heading from "../../components/heading/index.jsx";
import Text from "../../components/text/index.jsx";
import StyledButton from "../../components/StyledButton/index.jsx";

import './index.css';

const initialFormState = {
    firstName: '',
    lastName: '',
    phone: '',
    description: ''
}

const Contact = () => {
    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (event, name) => {
        setForm((prevState) => {
            return ({...prevState, [name]: event.target.value})
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted form: ", form)
    }

  return (
      <div className="contact">
          <div className="container">
              <div className="contact__description-container">
                  <Heading level={2} color="black">
                      Contact
                  </Heading>
                  <Text color="black" size="14px">
                      Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
                  </Text>
              </div>
              <form className="contact__form-container">
                  <div className="contact__form-first-last-name-container">
                      <FormInput name="firstName" placeholder="First Name" fullWidth onChange={handleInputChange} value={form.firstName}/>
                      <FormInput name="lastName" placeholder="Last Name" fullWidth onChange={handleInputChange} value={form.lastName}/>
                  </div>
                  <FormInput name="phone" style="full" placeholder="Phone Number" fullWidth onChange={handleInputChange} value={form.phone}/>
                  <FormInput name="description" style="full" placeholder={"What Service are you interested in?"} fullWidth onChange={handleInputChange} value={form.description}/>
                  <StyledButton type="submit" onClick={handleSubmit}>Submit now</StyledButton>
              </form>
          </div>
      </div>
  )
};

export default Contact;
