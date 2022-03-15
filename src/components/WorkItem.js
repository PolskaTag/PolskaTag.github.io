/** Component for workitem. This component will showcase a project with details
 * such as a description, picture, and technologies that it uses.
 */
import "./WorkItem.css";

export default function WorkItem(props) {
  const { projectName, date, description, plugs, techStack } = props.workItem;
  return (
    <div className="work-item">
      <div className="work-item-left">
        <div className="work-item-left-header">
          <h2 className="work-item-title">{projectName}</h2>
          <span>{date}</span>
        </div>
        <div className="work-item-left-description">{description}</div>
        <div className="work-item-left-plugs">{plugs}</div>
      </div>
      <div
        className={
          "work-item-mid " + projectName.replace(" ", "-").toLowerCase()
        }
      ></div>
      <div className="work-item-right">
        <ul>
          {techStack.map((tech, index) => {
            return <li id={projectName + String(index)}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
