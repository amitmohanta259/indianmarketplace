import React from 'react';
import { TaskItem } from '../../types';
import TabContent from '../dashboard/TabContent';

interface RightSidebarProps {
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
  return (
    <div className="col-md-3 bg-light vh-100 border-start p-3 position-fixed" style={{ right: 0, width: '25%' }}>
      <nav>
        <div className="nav nav-tabs" role="tablist">
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

      <div className="tab-content mt-3">
        <TabContent
          activeTab={activeTab}
          tasks={tasks}
          onTaskComplete={onTaskComplete}
          onNewTask={onNewTask}
        />
      </div>
    </div>
  );
};

export default RightSidebar;