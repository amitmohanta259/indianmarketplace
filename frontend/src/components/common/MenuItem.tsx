import React from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: string;
  badge?: number;
};

type Props = {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
};

const MenuItem: React.FC<Props> = ({ item, isActive, onClick }) => {
  return (
    <div className="row">
      <div
        className="col-12"
        style={{
          marginLeft: "0.5rem",
          borderLeft: `0.5rem solid ${isActive ? "red" : "white"}`,
          borderRadius: "5px",
        }}
      >
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            isActive ? "navbarActiveLinkAlignment" : "navbarInactiveLinkAlignment"
          }`}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <img
            src={item.icon}
            width="18"
            height="16"
            style={{ marginRight: 4 }}
          />
          {item.label}

          {item.badge && (
            <span className="badge bg-danger ms-2">{item.badge}</span>
          )}
        </a>
      </div>
    </div>
  );
};

export default MenuItem;
