export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  isActive: boolean;
  badge?: number;
}

export interface TaskItem {
  id: string;
  title: string;
  module: string;
  description: string;
  time: string;
  assignedUsers: string[];
  status: 'open' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface DashboardCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}