import classes from "./AboutBody.module.css";
import Project from "./Project";
import SkillChart from "./SkillChart/SkillChart.js";
import SoftSkillChart from "./SoftSkillChart/SoftSkillChart";
import RotateLink from "../links/BoxLink";
import Edu from "./Education/Edu";

function AboutBody() {
  return (
    <div>
      <RotateLink text="Home" location="/" />
      <div className="container">
        <div className="row">
          <h1>Matthew James</h1>
          <hr />
        </div>
        <div className="row">
          {/* <h1>About Matthew</h1>
        <hr /> */}
          <div className={`${classes.section} col-lg-6`}>
            <h2>Projects</h2>
            <hr />
            <Project
              gitLink="https://github.com/Melon-Catastrophe/Apollo-11-Game"
              title="Apollo Lander Simulation"
              description="In this project, I worked with two others to learn object-oriented programming in C++. We collaborated together and remotely, using git and github to share our code. "
              skills={["C++", "Git/Github", "Teamwork"]}
            />
            <Project
              gitLink="https://github.com/DeCKT/RecipeTracker"
              youtubeLink="https://www.youtube.com/watch?v=YRGA4DxS8xA"
              title="Recipe Tracker API"
              description="Worked with others utilizing node.js to create an API that performs CRUD operations. Used MongoDB to store information."
              skills={[
                "Node.js",
                "Express",
                "MongoDB",
                "Git/Github",
                "Teamwork",
              ]}
            />
            <Project
              gitLink="https://github.com/matthewj1561/InventoryManager"
              youtubeLink="https://www.youtube.com/watch?v=fu36ghE5fkU"
              title="Inventory Management System"
              description="Used Java Swing and Java to create a rudimentry database system. Users could add and remove items to a list. Stored all information into Google Firestore database."
              skills={["Java", "Java Swing", "Google Firestore", "Git/Github"]}
            />

            <Project
              gitLink="https://github.com/matthewj1561/ProjectManager"
              title="Project Management UI"
              description="Worked with a team to create modularized frontend with node.js and vanilla javascript."
              skills={["Javascript", "HTML", "CSS", "Node.js"]}
            />
          </div>
          <div className={`${classes.section} col-lg-6`}>
            <h2>Skills</h2>
            <hr />
            <SkillChart></SkillChart>
            <br />
            <div style={{ margin: 20 }}>
              <Edu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
