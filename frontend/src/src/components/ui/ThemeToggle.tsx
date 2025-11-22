import React from 'react';

interface ThemeToggleProps {
  currentTheme: 'light' | 'dark';
  onThemeToggle: (theme: 'light' | 'dark') => void;
  isCollapsed?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  currentTheme,
  onThemeToggle,
  isCollapsed = false
}) => {
  if (isCollapsed) {
    return (
      <div className="bg-white rounded p-2">
        <div className="d-flex flex-column gap-1">
          <button
            className={`btn btn-sm ${currentTheme === 'light' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onThemeToggle('light')}
            title="Light Theme"
          >
            <img src="/icons/sun.gif" alt="Light" width="14" />
          </button>
          <button
            className={`btn btn-sm ${currentTheme === 'dark' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => onThemeToggle('dark')}
            title="Dark Theme"
          >
            <img src="/icons/moon.png" alt="Dark" width="14" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded p-2">
      <div className="row g-1">
        <div className="col-6">
          <button
            className={`btn btn-sm w-100 ${currentTheme === 'light' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => onThemeToggle('light')}
          >
            <img src="/icons/sun.gif" alt="Light" width="14" className="me-1" />
            Light
          </button>
        </div>
        <div className="col-6">
          <button
            className={`btn btn-sm w-100 ${currentTheme === 'dark' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => onThemeToggle('dark')}
          >
            <img src="/icons/moon.png" alt="Dark" width="14" className="me-1" />
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;