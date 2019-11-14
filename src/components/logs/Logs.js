import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading, search }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const logsList =
    loading || logs === null ? (
      <Preloader />
    ) : (
      (search || logs).map(log => <LogItem key={log.id} log={log} />)
    );

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logsList.length === 0 ? <p>No logs to show</p> : logsList}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
