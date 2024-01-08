import React from "react";
import Card from "../Card";

import README from "../../assets/README.png";
import noFomo from "../../assets/noFomo.png";
import weather from "../../assets/weather.png";
import labby from "../../assets/LabbyIntro.png";
import umami from "../../assets/Umami.png";
import botany from "../../assets/BotanyIntro.png";

function Projects() {
  const project = [
    {
      id: 0,
      title: "README Generator",
      desc: "Generate a great README quickly for any project",
      img: README,
      github: "https://github.com/annabrisland/create-a-README",
      deployed: "https://github.com/annabrisland/create-a-README",
    },
    {
      id: 1,
      title: "No FOMO",
      desc: "A stuff-to-do planner",
      img: noFomo,
      github: "https://github.com/kevinstaresdarbon/NoFOMO",
      deployed: "https://kevinstaresdarbon.github.io/NoFOMO/",
    },
    {
      id: 2,
      title: "Weather Dash",
      desc: "A weather dashboard for your chosen location",
      img: weather,
      github: "https://github.com/annabrisland/weather-dash",
      deployed: "https://annabrisland.github.io/weather-dash/",
    },
    {
      id: 3,
      title: "Labby",
      desc: "A Lab Management System for BC Cancer",
      img: labby,
      github: "https://github.com/ubclaunchpad/labby",
      deployed: "https://annabrisland.com/#/labby/",
    },
    {
      id: 4,
      title: "Umami",
      desc: "Recipe Sharing Platform",
      img: umami,
      github: "https://github.com/ubclaunchpad/umami",
      deployed: "https://annabrisland.com/#/umami/",
    },
    {
      id: 5,
      title: "UBC Botany",
      desc: "Merch and Mascot Design",
      img: botany,
      github: "https://annabrisland.com/#/ubcbotany/",
      deployed: "https://annabrisland.com/#/ubcbotany/",
    },
  ];

  return (
    <div>
      <h1>PROJECTS</h1>
      <Card project={project[0]} />
      <Card project={project[1]} />
      <Card project={project[2]} />
      <Card project={project[3]} />
      <Card project={project[4]} />
      <Card project={project[5]} />
    </div>
  );
}

export default Projects;
