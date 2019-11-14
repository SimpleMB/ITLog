import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onFirstName = e => {
    setFirstName(e.target.value);
  };

  const onLastName = e => {
    setLastName(e.target.value);
  };

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter first name and last name" });
    } else {
      console.log(firstName, lastName);
      // Clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onFirstName}
            />
            <label htmlFor="message" className="active">
              First name:{" "}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onLastName}
            />
            <label htmlFor="message" className="active">
              Last name:{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn green"
        >
          Enter
        </a>
      </div>
    </div>
  );
};


export default AddTechModal;
