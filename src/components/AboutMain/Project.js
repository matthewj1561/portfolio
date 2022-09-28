import classes from "./Project.module.css";

function Project(props) {
  const skills = props.skills.map((skill) => {
    return <li className="btn btn-primary">{skill}</li>;
  });

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>

      <p className={classes.desc}>{props.description}</p>
      <ul className={classes.skillList}>{skills}</ul>
    </div>
  );
}

export default Project;
