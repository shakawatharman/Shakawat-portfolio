import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { projectData } from '../../Data/Data';
import { Button } from "react-bootstrap";
import './ProjectDetails.css';

const ProjectDetails = () => {

    const { projectId } = useParams();
    const [project, setProject]=useState({});


    useEffect(()=>{
        const detailProject= projectData.filter((project)=> project.id == projectId)
        setProject(detailProject[0])
    },[projectData])

    return (
        <div className="container">
            <h2>Project Name: {project.projectName}</h2>
            <div className="row detail-card">
                <div className="col-md-8">
                    <img className="img-fluid" src={project?.image1} alt="" />
                </div>
                <div className="col-md-4 text-start mt-5">
                    <h4>
                        <ul>
                            <li>
                            {project?.image1Details1}
                            </li>
                            <br />
                            <li>
                            {project?.image1Details2}
                            </li>
                        </ul>
                    </h4>
                </div>
            </div>
          
            <div className="row detail-card">
                <div className="col-md-8">
                    <img className="img-fluid" src={project?.image2} alt="" />
                </div>
                <div className="col-md-4 text-start mt-5">
                    <h4>
                        <ul>
                            <li>
                            {project?.image2Details1}
                            </li>
                            <br />
                            <li>
                            {project?.image2Details2}
                            </li>
                        </ul>
                    </h4>
                </div>
            </div>
           
            <div className="row detail-card">
                <div className="col-md-8">
                    <img className="img-fluid" src={project?.image3} alt="" />
                </div>
                <div className="col-md-4 text-start mt-5">
                    <h4>
                        <ul>
                            <li>
                            {project?.image3Details1}
                            </li>
                            <br />
                            <li>
                            {project?.image3Details2}
                            </li>
                        </ul>
                    </h4>
                </div>
            </div>

            <div className="row">
                <h2 className="mb-3">Explore My Works</h2>

               <div className="d-flex justify-content-around border p-5 shadow">
               <Button href={project?.livesite} variant="primary" size="md">Preview</Button>
                <Button href={project?.client}  variant="primary" size="md">Server Side</Button>
                <Button href={project?.server} variant="primary" size="md">Client Side</Button>
               </div>
            </div>
        </div>
      );
};

export default ProjectDetails;