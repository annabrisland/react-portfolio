import React from "react";
import Card from "../Card";

function Projects() {
  const project = [
    {
      id: 1,
      title: "Labby",
      desc: "A Lab Management Software",
      img: "",
    },
    {
      id: 2,
      title: "Umami",
      desc: "A Lab Management Software",
      img: "",
    },
  ];

  return (
    <div>
      <h1>PROJECTS</h1>
      <Card project={project[0]} />
      <Card project={project[1]} />
    </div>
  );
}

export default Projects;
