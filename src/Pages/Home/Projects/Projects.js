import React from 'react';
import { projectData } from '../../../Data/Data';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    return (
        <div className="container section-padding">
            <h2 className="mb-5">Some of my Projects</h2>
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