import React from 'react';
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router";
import './SingleProject.css';

const SingleProject = ({singleProject}) => {

    const history = useHistory();

    const handleProjectDetails=()=>{
        history.push(`/projects/${id}`)
    }

    const {projectName, thumbnail, id} = singleProject;
    return (
        
                <div className="col-md-4 project-image border shadows">
                    <img className="img-fluid" src={thumbnail} alt={projectName} />

                    <div className="my-3">
                        <h3 className="text-danger">{projectName}</h3>
                        <Button onClick={handleProjectDetails} className="px-5">Details</Button>
                    </div>
                </div>
           
    );
};

export default SingleProject;