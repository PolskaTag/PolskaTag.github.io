import getWorkItemData from "../resources/workItemData";
import WorkItem from "./WorkItem";

const workItemData = getWorkItemData();

function Work() {
  return (
    <section className="work" id="work">
      <h1 className="work-title">Some things I've done.</h1>
      {workItemData.map((workItem) => {
        return <WorkItem workItem={workItem}></WorkItem>;
      })}
    </section>
  );
}

export default Work;
