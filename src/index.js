import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML & CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#Efd81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#c3dcaf",
  },
  {
    skill: "Git and Github",
    level: "Intermediate",
    color: "#e84f33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60dafb",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3b00",
  },
];

function App() {
  return (
    <React.StrictMode>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </React.StrictMode>
  );
}

function Avatar() {
  return <img src="/react.svg" alt="react" className="avatar" />;
}
function Intro() {
  return (
    <main>
      <h1> Burhanudin Rabbani </h1>
      <p>
        I started my new career journey by joining and actively participating in
        a course called Bearmentor. Keep learning and creating is a life motto I
        hold dear now and forever.
      </p>
    </main>
  );
}

function Skill({ skillObj }) {
  let icon;
  if (skillObj.level === "advanced") icon = "💪";
  else if (skillObj.level === "Intermedate") icon = "👍";
  else icon = "😏";

  return (
    <span className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill} {icon}
    </span>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return <Skill key={skill.skill} skillObj={skill} />;
      })}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
