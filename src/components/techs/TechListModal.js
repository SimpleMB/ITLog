import React, {useEffect, useState} from 'react';
import TechItem from "./TechItem";
import Preloader from '../layout/Preloader';


const TechListModal = () => {
  
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, [])

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  }

  const techList = loading ? <Preloader /> : techs.map(tech => <TechItem key={tech.id} tech={tech}/>)

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? "No techs to show" : techList}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal;