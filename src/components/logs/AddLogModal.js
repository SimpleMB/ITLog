import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";
import TechOptionList from "../techs/TechOptionList";
// import Preloader from "../layout/Preloader";

const AddLogModal = ({ addLog, getTechs, tech: { techs, loading } }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  // useEffect(() => {
  //   getTechs();
  //   // eslint-disable-next-line
  // }, [message]);

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
      addLog({
        message,
        attention,
        tech,
        date: new Date()
      });

      M.toast({ html: `Log added by ${tech}` });
      // Clear fields
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  // const techList =  loading ? null : techs !== null && techs.map(tech => <TechOption key={tech.id} tech={tech}/>) 

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onMessage}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
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

const mapStateToProps = state => ({
  tech: state.tech
})
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { addLog, getTechs }
)(AddLogModal);
