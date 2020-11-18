import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import "../App.css"

export default function Project({src,alt,projectName,type,description,githubLink,demoLink}) {
  
    return (
          <div className="card" >
            <div className="image">
              <img src={src} alt={alt} className="projectImg"/>
              </div>
              <div className="details">
              <div className="center">
              <h1 id="h1description">{projectName}</h1>
                    <span className="colorChange hid">{type}</span>
                    <p id="pDescription" className="colorChange">{description}</p>
                <ul>
                  <li><a href={githubLink}>
                  <GitHubIcon /></a></li>
                  <li><a href={demoLink}>
                  <HttpIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>
)}