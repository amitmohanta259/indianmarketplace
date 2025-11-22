import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import RightSidebar from '../components/layout/RightSidebar';
import DashboardCards from '../components/dashboard/DashboardCards';
import { MenuItem, TaskItem, DashboardCard, UserProfile } from '../types';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nav-home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // Mock Data
  const mainMenuItems: MenuItem[] = [
    { id: 'account', label: 'Account', icon: '/icons/user.gif', isActive: activeMenu === 'account' },
    { id: 'home', label: 'Home', icon: '/icons/home.gif', isActive: activeMenu === 'home', badge: 4 },
    { id: 'task', label: 'Task', icon: '/icons/task.gif', isActive: activeMenu === 'task' },
    { id: 'activity', label: 'Activity', icon: '/icons/activity.gif', isActive: activeMenu === 'activity' },
    { id: 'users', label: 'Users', icon: '/icons/users.gif', isActive: activeMenu === 'users' },
    { id: 'notifications', label: 'Notifications', icon: '/icons/notification.gif', isActive: activeMenu === 'notifications', badge: 9 },
  ];

  const settingsMenuItems: MenuItem[] = [
    { id: 'settings', label: 'Settings', icon: '/icons/settings.gif', isActive: activeMenu === 'settings' },
    { id: 'support', label: 'Support', icon: '/icons/support.png', isActive: activeMenu === 'support' },
  ];

  const groupMenuItems: MenuItem[] = [
    { id: 'linkedin', label: 'Linkedin', icon: '/icons/linkedin.png', isActive: activeMenu === 'linkedin' },
    { id: 'twitter', label: 'Twitter', icon: '/icons/twitter.png', isActive: activeMenu === 'twitter' },
    { id: 'facebook', label: 'Facebook', icon: '/icons/facebook.png', isActive: activeMenu === 'facebook' },
    { id: 'instagram', label: 'Instagram', icon: '/icons/instagram.png', isActive: activeMenu === 'instagram' },
  ];

  const tasks: TaskItem[] = [
    {
      id: '1',
      title: 'Client Review Login',
      module: 'Login Module',
      description: 'Review and improve the login module authentication flow and user experience.',
      time: 'Today 10:00 PM',
      assignedUsers: [
        '/avatars/user1.jpg',
        '/avatars/user2.jpg',
        '/avatars/user3.jpg',
        '/avatars/user4.jpg'
      ],
      status: 'open',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Signup Module Validation',
      module: 'Authentication',
      description: 'Fix validation issues in the signup module and improve error handling.',
      time: 'Today 02:00 PM',
      assignedUsers: [
        '/avatars/user5.jpg',
        '/avatars/user6.jpg'
      ],
      status: 'in-progress',
      priority: 'medium'
    }
  ];

  const dashboardCards: DashboardCard[] = [
    {
      id: '1',
      title: 'Project Analytics',
      description: 'Comprehensive analytics and reporting for your projects with real-time data visualization.',
      image: '/images/analytics.jpg'
    },
    {
      id: '2',
      title: 'Team Management',
      description: 'Efficiently manage your team members, tasks, and project assignments in one place.',
      image: '/images/team.jpg'
    },
    {
      id: '3',
      title: 'Performance Metrics',
      description: 'Track and analyze performance metrics to optimize your workflow and productivity.',
      image: '/images/performance.jpg'
    }
  ];

  const userProfile: UserProfile = {
    name: 'Amit Mohanta',
    email: 'amitmohanta@gmail.com',
    avatar: '/avatars/admin.jpg'
  };

  // Event Handlers
  const handleMenuClick = (menuId: string): void => {
    setActiveMenu(menuId);
  };

  const handleSearchChange = (query: string): void => {
    setSearchQuery(query);
  };

  const handleThemeToggle = (selectedTheme: 'light' | 'dark'): void => {
    setTheme(selectedTheme);
  };

  const handleTaskComplete = (taskId: string): void => {
    console.log(`Task ${taskId} completed`);
  };

  const handleNewTask = (): void => {
    console.log('Create new task');
  };

  const handleSidebarToggle = (): void => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="container-fluid vh-100">
      <Navbar onSidebarToggle={handleSidebarToggle} />

      <div className="row h-100">
        <Sidebar
          mainMenuItems={mainMenuItems}
          settingsMenuItems={settingsMenuItems}
          groupMenuItems={groupMenuItems}
          userProfile={userProfile}
          searchQuery={searchQuery}
          theme={theme}
          activeMenu={activeMenu}
          isCollapsed={isSidebarCollapsed}
          onMenuClick={handleMenuClick}
          onSearchChange={handleSearchChange}
          onThemeToggle={handleThemeToggle}
          onToggle={handleSidebarToggle}
        />

        {/* Main Content - Dynamic margin based on sidebar state */}
        <div
          className={`p-4 transition-all`}
          style={{
            marginLeft: isSidebarCollapsed ? '80px' : '16.666%',
            width: isSidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 16.666%)',
            transition: 'margin-left 0.3s ease, width 0.3s ease'
          }}
        >
          <div className="mb-4">
            <h4 className="fw-bold mb-4">Dashboard</h4>
            <DashboardCards cards={dashboardCards} />
          </div>

          {/* Additional Content */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Recent Activity</h5>
                  <div className="activity-list">
                    <div className="activity-item d-flex align-items-center mb-3">
                      <div className="activity-icon bg-primary rounded-circle text-white p-2 me-3">
                        <i className="fas fa-user-plus"></i>
                      </div>
                      <div>
                        <p className="mb-0 fw-semibold">New user registered</p>
                        <small className="text-muted">2 minutes ago</small>
                      </div>
                    </div>
                    <div className="activity-item d-flex align-items-center mb-3">
                      <div className="activity-icon bg-success rounded-circle text-white p-2 me-3">
                        <i className="fas fa-task-check"></i>
                      </div>
                      <div>
                        <p className="mb-0 fw-semibold">Task completed</p>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Quick Stats</h5>
                  <div className="stats-grid">
                    <div className="stat-item text-center p-3">
                      <h3 className="text-primary mb-0">24</h3>
                      <small className="text-muted">Active Tasks</small>
                    </div>
                    <div className="stat-item text-center p-3">
                      <h3 className="text-success mb-0">12</h3>
                      <small className="text-muted">Completed</small>
                    </div>
                    <div className="stat-item text-center p-3">
                      <h3 className="text-warning mb-0">8</h3>
                      <small className="text-muted">In Progress</small>
                    </div>
                    <div className="stat-item text-center p-3">
                      <h3 className="text-info mb-0">4</h3>
                      <small className="text-muted">New</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSidebar
          activeTab={activeTab}
          tasks={tasks}
          onTabChange={setActiveTab}
          onTaskComplete={handleTaskComplete}
          onNewTask={handleNewTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;