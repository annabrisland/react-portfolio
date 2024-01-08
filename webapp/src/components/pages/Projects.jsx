import React from "react";
import Card from "../Card";

function Projects() {
  const project = [
    {
      id: 1,
      title: "Labby",
      desc: "A Lab Management System for BC Cancer",
      img: "",
    },
    {
      id: 2,
      title: "Umami",
      desc: "Recipe Sharing Platform",
      img: "",
    },
    {
      id: 3,
      title: "UBC Botany",
      desc: "Merch and Mascot Design",
      img: "",
    },
  ];

  return (
    <div>
      <h1>PROJECTS</h1>
      <Card project={project[0]} />
      <Card project={project[1]} />
      <Card project={project[2]} />
    </div>
  );
}

export default Projects;
