import React from "react";
import "./TaskCard.css";

type Props = {
  id: string;
  title: string;
  module?: string;
  description?: string;
  time?: string;
  assignedUsers?: string[];
  onComplete?: (taskId: string) => void;
};

const TaskCard: React.FC<Props> = ({
  id,
  title,
  module,
  description,
  time,
  assignedUsers = [],
  onComplete = () => {},
}) => {
  return (
    <div className="task-card">
      <h4>{title}</h4>
      {module && <p>{module}</p>}
      {description && <p>{description}</p>}
      {time && <p>{time}</p>}

      {assignedUsers.length > 0 && (
        <div className="assigned-users">
          {assignedUsers.map((user, index) => (
            <img key={index} src={user} alt={`user-${index}`} />
          ))}
        </div>
      )}

      <button onClick={() => onComplete(id)}>Complete</button>
    </div>
  );
};

export default TaskCard;
