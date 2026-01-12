import React from "react";
import TaskCard from "../common/TaskCard";

type TaskItem = React.ComponentProps<typeof TaskCard>;

type Props = {
  activeTab: string;
  tasks: TaskItem[];
  onTabChange: (tab: string) => void;
  onTaskComplete: (id: string) => void;
  onNewTask: () => void;
};

const RightSidebar: React.FC<Props> = ({
  activeTab,
  tasks,
  onTabChange,
  onTaskComplete,
  onNewTask,
}) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "nav-home":
        return (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-5" style={{ margin: "1rem" }}>
                <div style={{ fontWeight: 600, fontSize: "medium" }}>
                  Today's Task
                </div>
                <div style={{ fontWeight: 400, fontSize: "small" }}>
                  Thursday, 29 2022
                </div>
              </div>

              <div className="col-5" style={{ margin: "1rem 0 0 1rem" }}>
                <button className="btn btn-primary btn-sm" onClick={onNewTask}>
                  New Task
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-4" style={{ borderRight: "1px solid grey" }}>
                All <span className="badge bg-primary">4</span>
              </div>
              <div className="col-4" style={{ borderRight: "1px solid grey" }}>
                Open <span className="badge bg-danger">4</span>
              </div>
              <div className="col-4">
                Close <span className="badge bg-success">4</span>
              </div>
            </div>

            <div style={{ overflow: "auto", height: "72vh" }}>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  {...task}
                  onComplete={onTaskComplete}
                />
              ))}
            </div>
          </div>
        );

      case "nav-profile":
        return <div>Messages Tab</div>;
      case "nav-contact":
        return <div>Modules Tab</div>;
      default:
        return null;
    }
  };

  return (
    <div className="col-3" style={{ position: "fixed", right: "0%" }}>
      <div className="container-fluid" style={{ marginRight: "0" }}>
        <div className="row" style={{ marginTop: "0.5rem" }}>
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  onClick={() => onTabChange("nav-home")}
                  style={{ borderRadius: "0.05px" }}
                >
                  Task One
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={() => onTabChange("nav-profile")}
                  style={{ borderRadius: "0.05px" }}
                >
                  Message
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                  onClick={() => onTabChange("nav-contact")}
                  style={{ borderRadius: "0.05px" }}
                >
                  Modules
                </button>
                {/* <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button> */}
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;