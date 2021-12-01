import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { projectData } from '../../Data/Data';
import './ProjectDetails.css';

const ProjectDetails = () => {

    const { projectId } = useParams();
    const [project, setProject]=useState({});


    useEffect(()=>{
        const detailProject= projectData.filter((project)=> project.id == projectId)
        setProject(detailProject[0])
    },[projectData])

    console.log(project)
    return (
        <div className="container">
            <div className="row detail-card">
                <div className="col-md-8">
                    <img className="img-fluid" src={project?.image1} alt="" />
                </div>
                <div className="col-md-4">
                    <h4>{project?.image1Details}</h4>
                </div>
            </div>
        </div>
      );
};

export default ProjectDetails;