import React from "react";

const TechOption = ({ tech: { firstName, lastName } }) => {
  return (
    <option value={`${firstName} ${lastName}`}>{`${firstName} ${lastName}`}</option>
  );
};

export default TechOption;