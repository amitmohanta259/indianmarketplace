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
                <div style={{ fontWeight: 600, fontSize: "larger" }}>
                  Today’s Task
                </div>
                <div style={{ fontWeight: 400, fontSize: "small" }}>
                  Thursday, 29 2022
                </div>
              </div>

              <div className="col-5" style={{ margin: "1.5rem 0 0 2rem" }}>
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
    <div className="col-3" style={{ position: "fixed", right: 0 }}>
      <nav className="nav nav-tabs">
        <button
          className={`nav-link ${activeTab === "nav-home" ? "active" : ""}`}
          onClick={() => onTabChange("nav-home")}
        >
          Task
        </button>
        <button
          className={`nav-link ${activeTab === "nav-profile" ? "active" : ""}`}
          onClick={() => onTabChange("nav-profile")}
        >
          Message
        </button>
        <button
          className={`nav-link ${activeTab === "nav-contact" ? "active" : ""}`}
          onClick={() => onTabChange("nav-contact")}
        >
          Modules
        </button>
      </nav>

      {renderTabContent()}
    </div>
  );
};

export default RightSidebar;
