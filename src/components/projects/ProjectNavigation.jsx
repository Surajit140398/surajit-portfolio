import { Link } from "react-router-dom";
import Magnetic from "../Magnetic";

export default function ProjectNavigation({ nextProjectLink, nextProjectTitle }) {
  return (
    <div className="project-navigation">
      <div className="nav-top">
        <Link to="/" className="back-link">
          ← Back to Projects
        </Link>
      </div>
      
      {nextProjectLink && nextProjectTitle && (
        <div className="next-project">
          <p className="next-label">NEXT PROJECT</p>
          <Magnetic>
            <Link to={nextProjectLink} className="next-link">
              <h2>{nextProjectTitle} ↗</h2>
            </Link>
          </Magnetic>
        </div>
      )}
    </div>
  );
}
