import React from "react";

type UserProfile = {
  name: string;
  email: string;
  avatar: string;
};

type Props = {
  user: UserProfile;
  onLogout: () => void;
  isCollapsed?: boolean;
};

const UserProfileCard: React.FC<Props> = ({
  user,
  onLogout,
  isCollapsed = false,
}) => {
  if (isCollapsed) {
    return (
      <div className="bg-white rounded p-2">
        <div className="d-flex flex-column align-items-center gap-2">
          <img
            src={user.avatar}
            width="32"
            height="32"
            className="rounded-circle"
          />

          <button className="btn btn-sm btn-outline-secondary" onClick={onLogout}>
            <img src="/icons/logout.png" width="14" />
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
          width="40"
          height="40"
          className="rounded-circle me-3"
        />

        <div className="flex-grow-1">
          <div className="fw-semibold">{user.name}</div>
          <small className="text-muted">{user.email}</small>
        </div>

        <button className="btn btn-sm btn-outline-secondary" onClick={onLogout}>
          <img src="/icons/logout.png" width="16" />
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
