import React from 'react';
import { MenuItem } from '../../types';

interface MenuItemsProps {
  items: MenuItem[];
  onMenuClick: (menuId: string) => void;
  isCollapsed?: boolean;
  className?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  items,
  onMenuClick,
  isCollapsed = false,
  className = ''
}) => {
  return (
    <div className={`list-group list-group-flush ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="row">
          <div
            className={`col-12 ${item.isActive ? 'navBarElementActive' : 'navBarElementInactive'}`}
            style={{
              marginLeft: '0.5rem',
              marginBottom: '1px',
              borderRadius: '5px',
            }}
          >
            <button
              className={`list-group-item list-group-item-action border-0 w-100 text-start position-relative ${
                item.isActive ? 'navbarActiveLinkAlignment' : 'navbarInactiveLinkAlignment'
              }`}
              onClick={() => onMenuClick(item.id)}
              title={isCollapsed ? item.label : ''}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{ marginRight: isCollapsed ? '0' : '2px' }}
                width="18"
                height="16"
              />

              {/* Label - Hidden when collapsed */}
              {!isCollapsed && (
                <span className="ms-2">{item.label}</span>
              )}

              {/* Badge - Position differently when collapsed */}
              {item.badge && item.badge > 0 && (
                <span
                  className={`badge bg-danger ${
                    isCollapsed
                      ? 'position-absolute top-0 start-100 translate-middle'
                      : 'position-absolute top-50 start-100 translate-middle'
                  }`}
                  style={{
                    marginLeft: isCollapsed ? '-10px' : '-1rem',
                    fontSize: isCollapsed ? '0.6rem' : '0.7rem'
                  }}
                >
                  {item.badge}
                </span>
              )}

              {/* Active indicator for collapsed state */}
              {isCollapsed && item.isActive && (
                <div
                  className="position-absolute top-50 start-100 translate-middle-y"
                  style={{
                    width: '3px',
                    height: '20px',
                    backgroundColor: '#dc3545',
                    borderRadius: '2px'
                  }}
                />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;