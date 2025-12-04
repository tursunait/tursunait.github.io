import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/126803478?s=400&u=662d31ad3121ebe725e9d95f2f53a126b326fe93&v=4" alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tursunait" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tursunait/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tursunai Turumbekova</h1>
          <p>
            Data Scientist | ML Engineer focused on large-scale data analysis, ML/LLM evaluation, and
            building reliable data workflows to support scalable, insight-driven solutions.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/tursunait" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tursunait/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
