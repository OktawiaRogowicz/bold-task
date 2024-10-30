import React, {useState} from "react";

import FormInput from "../../../../components/formInput/index.jsx";
import StyledButton from "../../../../components/StyledButton/index.jsx";
import Text from "../../../../components/text/index.jsx";

import "./index.css";

const initialFormState = {
    fields: {
        firstName: "",
        lastName: "",
        phone: "",
        description: "",
    },
    errors: undefined,
};

const ContactForm = () => {
    const [form, setForm] = useState(initialFormState);

    const handleInputChange = (event, name) => {
        setForm((prevState) => {
            return {
                ...prevState,
                fields: {
                    ...prevState.fields,
                    [name]: event.target.value,
                },
            };
        });
    };

    const errorsValidation = () =>
        Object.values(form?.errors).every(
            (error) => error === null || error === "",
        );

    const handleValidate = () => {
        const errors = Object.fromEntries(
            Object.entries(form.fields).map(([field, value]) => [
                field,
                !form.fields[field] ? "Pole nie może być puste" : "",
            ]),
        );
        setForm((prevState) => ({...prevState, errors}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidate();
        if (errorsValidation()) console.log("Submitted ContactForm: ", form);
    };

    return (
        <form className="contact-form__container">
            <div className="contact-form__first-last-name-container">
                <FormInput
                    name="firstName"
                    placeholder="First Name"
                    fullWidth
                    onChange={handleInputChange}
                    value={form.fields.firstName}
                    error={form.errors?.firstName}
                />
                <FormInput
                    name="lastName"
                    placeholder="Last Name"
                    fullWidth
                    onChange={handleInputChange}
                    value={form.fields.lastName}
                    error={form.errors?.lastName}
                />
            </div>
            <FormInput
                name="phone"
                style="full"
                placeholder="Phone Number"
                fullWidth
                onChange={handleInputChange}
                value={form.fields.phone}
                error={form.errors?.phone}
            />
            <FormInput
                name="description"
                style="full"
                placeholder={"What Service are you interested in?"}
                fullWidth
                onChange={handleInputChange}
                value={form.fields.description}
                error={form.errors?.description}
            />
            <div className="contact-form__button-container">
                <StyledButton type="submit" onClick={handleSubmit}>
                    Submit now
                </StyledButton>
                {form.errors && errorsValidation() && (
                    <Text color="green">Success!</Text>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
