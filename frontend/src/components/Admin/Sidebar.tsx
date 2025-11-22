import React from 'react';
//import { RightSidebarProps } from '../../types/AdminTypes';
import TaskCard from '../common/TaskCard';
//import TaskCard, { TaskCardProps } from '../common/TaskCard';
export interface RightSidebarProps {
  activeTab: string;
  tasks: TaskItem[];
  onTabChange: (tab: string) => void;
  onTaskComplete: (taskId: string) => void;
  onNewTask: () => void;
}
const RightSidebar: React.FC<RightSidebarProps> = ({
  activeTab,
  tasks,
  onTabChange,
  onTaskComplete,
  onNewTask
}) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'nav-home':
        return (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                <div className="row" style={{ fontWeight: 600, fontSize: 'larger' }}>
                  Today's Task
                </div>
                <div className="row" style={{ fontWeight: 400, fontSize: 'small' }}>
                  Thursday,29 2022
                </div>
              </div>
              <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                <button className="btn btn-primary btn-sm" onClick={onNewTask}>
                  New Task
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                All <span className="badge bg-primary" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                Open <span className="badge bg-danger" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
              <div className="col-4">
                Close <span className="badge bg-success" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
            </div>

            <div className="container-fluid" id="right-body" style={{ position: 'relative', overflow: 'scroll', height: '72vh' }}>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onComplete={() => onTaskComplete(task.id)}
                />
              ))}
              <div className="row" style={{ marginTop: '0.5rem' }}>
                <div className="col-12">
                  <a href="#" style={{ textAlign: 'right', textDecoration: 'none' }}>
                    View More &gt;&gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'nav-profile':
        return (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                <div className="row" style={{ fontWeight: 600, fontSize: 'larger' }}>
                  Messages
                </div>
                <div className="row" style={{ fontWeight: 400, fontSize: 'small' }}>
                  Thursday,29 2022
                </div>
              </div>
              <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                <button className="btn btn-primary btn-sm">New Task</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                Inbox <span className="badge bg-primary">4</span>
              </div>
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                Sent Mail
              </div>
              <div className="col-4">
                Draft <span className="badge bg-success">4</span>
              </div>
            </div>
            {/* Message content would go here */}
          </div>
        );

      case 'nav-contact':
        return (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                <div className="row" style={{ fontWeight: 600, fontSize: 'larger' }}>
                  Assignments
                </div>
                <div className="row" style={{ fontWeight: 400, fontSize: 'small' }}>
                  Thursday,29 2022
                </div>
              </div>
              <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                <button className="btn btn-primary btn-sm">New Task</button>
              </div>
            </div>
            <div className="row">
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                All <span className="badge bg-primary" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
              <div className="col-4" style={{ borderRight: '1px solid grey' }}>
                Open <span className="badge bg-danger" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
              <div className="col-4">
                Close <span className="badge bg-success" style={{ marginLeft: '0.5%' }}>4</span>
              </div>
            </div>
            {/* Modules content would go here */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="col-3" style={{ position: 'fixed', right: '0%' }}>
      <div className="container-fluid" style={{ marginRight: 0 }}>
        <div className="row" style={{ marginTop: '0.5rem' }}>
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
                  onClick={() => onTabChange('nav-home')}
                >
                  Task
                </button>
                <button
                  className={`nav-link ${activeTab === 'nav-profile' ? 'active' : ''}`}
                  onClick={() => onTabChange('nav-profile')}
                >
                  Message
                </button>
                <button
                  className={`nav-link ${activeTab === 'nav-contact' ? 'active' : ''}`}
                  onClick={() => onTabChange('nav-contact')}
                >
                  Modules
                </button>
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