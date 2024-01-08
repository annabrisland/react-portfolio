import React from "react";

function Card(props) {

    const { project } = props;

    return (
        <div className="card">
            <img className="proj-img" src={project.img} style={{width:"800px"}}></img>
            <div className="info">
                <h3 className="title">{project.title}</h3>
                <div className="description">{project.desc}</div>
                <div className="project-links">
                    <button className="github-btn" href={project.github}>GitHub</button>
                    <button className="view-btn" href={project.deployed}>View</button>
                </div>
            </div>
        </div>
    );
}

export default Card;