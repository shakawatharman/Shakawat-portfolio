import React from 'react';
import { projectData } from '../../../Data/Data';
import SingleProject from '../SingleProject/SingleProject';
import './Projects.css';

const Projects = () => {
    return (
        <div className="container projects-container">
            <h1 className="mb-5 text-uppercase">Some of my <span>Projects</span></h1>
            <div className="row">
                
            {
                projectData.map(project => <SingleProject
                key="project.id"
                singleProject={project}
                ></SingleProject>)
            }
            </div>
        </div>
    );
};

export default Projects;