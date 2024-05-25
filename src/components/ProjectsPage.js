import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

function ProjectsPage() {
  return (
    <div className="main-content">
      <div className="section">
        <h2>Projects Page</h2>
        <p>Here are my projects.</p>
        <Link to="/project">
          <button>Click to view Data Visualization project</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPage;