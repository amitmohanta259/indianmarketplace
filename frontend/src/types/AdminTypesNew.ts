
console.log("Loaded AdminTypes.ts");

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
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

// KEEP ONLY ONE NAVBAR PROPS

export interface SidebarProps {
  mainMenuItems: MenuItem[];
  settingsMenuItems: MenuItem[];
  groupMenuItems: MenuItem[];
  userProfile: UserProfile;
  searchQuery: string;
  activeMenu: string;
  onMenuClick: (menuId: string) => void;
  onSearchChange: (query: string) => void;
}

export interface RightSidebarProps {
  activeTab: string;
  tasks: TaskItem[];
  onTabChange: (tab: string) => void;
  onTaskComplete: (taskId: string) => void;
  onNewTask: () => void;
}

export interface MenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

export interface TaskCardProps {
  task: TaskItem;
  onComplete: () => void;
}

export interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export type { NavbarProps };


console.log("Exports in AdminTypes:", {
  NavbarProps: typeof NavbarProps
});
