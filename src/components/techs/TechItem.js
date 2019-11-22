import React from "react";

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
  }
  return (
    <li className="collection-item">
      <a
        href="#edit-tech-modal"
        className={`modal-trigger}`}
      >
        {firstName + " " + lastName}
      </a>
      <a href="#! " className="secondary-content" onClick={onDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

export default TechItem;
