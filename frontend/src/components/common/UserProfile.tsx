import React from 'react';
import { UserProfile } from '../../types';

interface UserProfileCardProps {
  user: UserProfile;
  onLogout: () => void;
  isCollapsed?: boolean;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  onLogout,
  isCollapsed = false
}) => {
  if (isCollapsed) {
    return (
      <div className="bg-white rounded p-2">
        <div className="d-flex flex-column align-items-center gap-2">
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-circle"
            width="32"
            height="32"
            style={{ objectFit: 'cover' }}
            title={user.name}
          />
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={onLogout}
            title="Logout"
          >
            <img src="/icons/logout.png" alt="Logout" width="14" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded p-3">
      <div className="d-flex align-items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-circle me-3"
          width="40"
          height="40"
          style={{ objectFit: 'cover' }}
        />
        <div className="flex-grow-1">
          <div className="fw-semibold">{user.name}</div>
          <small className="text-muted">{user.email}</small>
        </div>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={onLogout}
          title="Logout"
        >
          <img src="/icons/logout.png" alt="Logout" width="16" />
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;