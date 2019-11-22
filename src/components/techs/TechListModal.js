import React, { useEffect } from "react";
import TechItem from "./TechItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs, deleteTech } from "../../actions/techActions";

const TechListModal = ({ tech: { techs, loading }, getTechs, deleteTech }) => {

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const techList = loading ? (
    <Preloader />
  ) : (
    techs !== null && techs.map(tech => <TechItem key={tech.id} tech={tech} deleteTech={deleteTech}/>)
  );

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.length === 0 ? "No techs to show" : techList}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  tech: state.tech
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
  deleteTech: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getTechs, deleteTech })(TechListModal);
