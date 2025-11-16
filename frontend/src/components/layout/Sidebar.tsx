import React from 'react';
import { MenuItem, UserProfile } from '../../types';
import MenuItems from '../ui/MenuItems';
import ThemeToggle from '../ui/ThemeToggle';
import UserProfileCard from '../common/UserProfile';
import SearchBar from '../common/SearchBar';

interface SidebarProps {
  mainMenuItems: MenuItem[];
  settingsMenuItems: MenuItem[];
  groupMenuItems: MenuItem[];
  userProfile: UserProfile;
  searchQuery: string;
  theme: 'light' | 'dark';
  activeMenu: string;
  isCollapsed: boolean;
  onMenuClick: (menuId: string) => void;
  onSearchChange: (query: string) => void;
  onThemeToggle: (theme: 'light' | 'dark') => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  mainMenuItems,
  settingsMenuItems,
  groupMenuItems,
  userProfile,
  searchQuery,
  theme,
  activeMenu,
  isCollapsed,
  onMenuClick,
  onSearchChange,
  onThemeToggle,
  onToggle
}) => {
  return (
    <div
      className={`bg-light vh-100 border-end p-3 position-fixed d-flex flex-column ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
      style={{
        left: 0,
        width: isCollapsed ? '80px' : '16.666%',
        transition: 'width 0.3s ease',
        zIndex: 1000
      }}
    >
      {/* Scrollable Menu Section */}
      <div className="flex-grow-1 overflow-auto">
        {/* Search - Hidden when collapsed */}
        {!isCollapsed && (
          <div className="mb-4">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              placeholder="Search..."
            />
          </div>
        )}

        {/* Main Menu */}
        <div className="mb-4">
          {!isCollapsed && (
            <h6 className="fw-bold text-uppercase small mb-3">Menu</h6>
          )}
          <MenuItems
            items={mainMenuItems}
            onMenuClick={onMenuClick}
            isCollapsed={isCollapsed}
          />
        </div>

        {!isCollapsed && <hr />}

        {/* Settings Menu */}
        <div className="mb-4">
          <MenuItems
            items={settingsMenuItems}
            onMenuClick={onMenuClick}
            isCollapsed={isCollapsed}
          />
        </div>

        {/* Group Menu */}
        {!isCollapsed && (
          <div className="mb-4">
            <h6 className="fw-bold text-uppercase small mb-3">Group</h6>
            <MenuItems
              items={groupMenuItems}
              onMenuClick={onMenuClick}
              isCollapsed={isCollapsed}
            />
          </div>
        )}
      </div>

      {/* Fixed Bottom Section */}
      <div className="border-top pt-3">
        {/* Theme Toggle */}
        <div className="mb-3">
          <ThemeToggle
            currentTheme={theme}
            onThemeToggle={onThemeToggle}
            isCollapsed={isCollapsed}
          />
        </div>

        {/* User Profile */}
        <UserProfileCard
          user={userProfile}
          onLogout={() => console.log('Logout clicked')}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;