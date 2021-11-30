import React from 'react';
import TextAnimation from 'react-animate-text';
import {Button} from 'react-bootstrap';
import './SingleProject.css';

const SingleProject = ({singleProject}) => {

    const {projectName, thumbnail} = singleProject;
    return (
        
                <div className="col-md-4 project-image border">
                    <img className="img-fluid" src={thumbnail} alt={projectName} />
                    <TextAnimation><h3 className="text-danger">{projectName}</h3> </TextAnimation> 
                    <Button className="px-5">Details</Button>
                </div>
           
    );
};

export default SingleProject;