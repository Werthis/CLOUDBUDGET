import { useState } from "react";

import Heading from "../../components/heading";
import Text from "../../components/text";
import FormInput from "../../components/formInput";

import contactModel from "../../models/contact.model";

import "./index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [question, setQuestion] = useState("");

  const numberHandler = (value) => {
    const validatedValue = value.replace(/[^0-9]/g, "");
    setPhoneNumber(validatedValue);
  };

  const onSubmit = () => {
    const formData = {
      name: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
      question: question,
    };
    console.log("Submit:", formData);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="leftContent">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text size="1.4rem">{contactModel.text}</Text>
        </div>
        <div className="rightContent">
          <div className="nameBox">
            <FormInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={contactModel.inputFirstName}
            />
            <FormInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={contactModel.inputLastName}
            />
          </div>
          <FormInput
            type="tel"
            value={phoneNumber}
            onChange={(e) => numberHandler(e.target.value)}
            placeholder={contactModel.inputPhoneNumber}
            style="full"
          />
          <FormInput
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={contactModel.inputQuestion}
            style="full"
          />
          <button className="btn" onClick={onSubmit}>
            {contactModel.submitBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
