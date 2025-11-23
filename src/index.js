import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return <img src="/logo192.png" alt="react" className="avatar" />;
}
function Intro() {
  return (
    <main>
      <h1> Burhanudin Rabbani </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
        lorem sem. Ut commodo tortor eget mi mattis consectetur. Vivamus
        consequat justo vitae tempus auctor.
      </p>
    </main>
  );
}

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.skillName}{" "}
    </span>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="blue" skillName="HTML & CSS 💪" />
      <Skill color="yellow" skillName="JavaScript 💪" />
      <Skill color="lime" skillName="Web Design 💪" />
      <Skill color="red" skillName="Git and Github 👍" />
      <Skill color="aqua" skillName="React 💪" />
      <Skill color="red" skillName="Svelte 😇" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
