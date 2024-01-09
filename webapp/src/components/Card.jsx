import React from "react";

function Card(props) {

    const { project } = props;

    return (
        <div className="card">
            <img className="proj-img" src={project.img}></img>
            <div className="info">
                <h3 className="project-title">{project.title}</h3>
                <div className="description">{project.desc}</div>
                <div className="project-links">
                    <a className="github-btn" href={project.github} target="_blank">GitHub</a>
                    <a className="view-btn" href={project.deployed} target="_blank">View</a>
                </div>
            </div>
        </div>
    );
}

export default Card;