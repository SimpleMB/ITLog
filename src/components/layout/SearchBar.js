import React, {useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs, clearLogs } from "../../actions/logActions";

const SearchBar = ({log: {search} , searchLogs, clearLogs}) => {
  const [input, setInput] = useState("");
  
  const onSearch = e => {
    setInput(e.target.value)
    searchLogs(input);
  }

  const onClose = () => {
    setInput("");
    clearLogs();
  }
  
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" value={input} onChange={onSearch}/>
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons"onClick={onClose}>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  log: state.log
});

SearchBar.propsTypes = {
  log: PropTypes.object.isRequired,
  searchLogs: PropTypes.func.isRequired,
  clearLogs: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { searchLogs, clearLogs })(SearchBar);
