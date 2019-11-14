import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js"

const LogItem = ({ log: { id, message, attention, date, tech }, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(id);
    M.toast({html: "Log Deleted"})
  }

  const onCurrent = () => {
    setCurrent(id);
  }

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        onClick={onCurrent}
      >
        {message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{id}</span> last updated by{" "}
        <span className="black-text">{tech}</span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss">{date}</Moment>
      </span>
      <a href="#! " className="secondary-content" onClick={onDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, {deleteLog, setCurrent})(LogItem);
