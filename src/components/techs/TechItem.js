import React from "react";

const TechItem = ({ tech: { id, firstName, lastName } }) => {
  return (
    <li className="collection-item">
      <a
        href="#edit-tech-modal"
        className={`modal-trigger}`}
      >
        {firstName + " " + lastName}
      </a>
      <a href="#! " className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

export default TechItem;
