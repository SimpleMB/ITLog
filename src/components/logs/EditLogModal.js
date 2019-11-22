import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import TechOptionList from "../techs/TechOptionList";

const EditLogModal = ({ log: { current }, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onMessage = e => {
    setMessage(e.target.value);
  };

  const onTech = e => {
    setTech(e.target.value);
  };

  const onAttention = e => {
    setAttention(!attention);
  };

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      updateLog({
        message,
        attention,
        tech,
        id: current.id,
        date: new Date()
      });
      // Clear fields
      setMessage("");
      setAttention(false);
      setTech("");
      M.toast({html: `Log updated by ${tech}`});
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onMessage}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={onTech}
            >
              <option value="" disabled>
                Select technician
              </option>
              <TechOptionList />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  value={attention}
                  checked={attention}
                  className="filled-in"
                  onChange={onAttention}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
