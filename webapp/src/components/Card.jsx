import React from "react";

function Card(props) {

    const { project } = props;

    return (
        <div className="card">
            <img className="proj-img" src={project.img}></img>
            <div className="info">
                <div className="title">{project.title}</div>
                <div className="description">{project.desc}</div>
            </div>
        </div>
    );
}

export default Card;