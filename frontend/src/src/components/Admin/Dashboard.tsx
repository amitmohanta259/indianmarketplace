import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminPanel.css'; // Import the CSS file

// Define types for our component
interface MenuItem {
  id: string;
  label: string;
  icon: string;
  isActive: boolean;
  badge?: number;
}

interface TaskItem {
  id: string;
  title: string;
  module: string;
  description: string;
  time: string;
  assignedUsers: string[];
}

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('nav-home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeMenu, setActiveMenu] = useState<string>('home');

  // Menu data
  const mainMenu: MenuItem[] = [
    { id: 'account', label: 'Account', icon: 'util/photo/icons8-male-user.gif', isActive: activeMenu === 'account' },
    { id: 'home', label: 'Home', icon: 'util/photo/icons8-home.gif', isActive: activeMenu === 'home', badge: 4 },
    { id: 'task', label: 'Task', icon: 'util/photo/icons8-checked-checkbox.gif', isActive: activeMenu === 'task' },
    { id: 'activity', label: 'Activity', icon: 'util/photo/icons8-activity.gif', isActive: activeMenu === 'activity' },
    { id: 'users', label: 'Users', icon: 'util/photo/icons8-user.gif', isActive: activeMenu === 'users' },
    { id: 'notifications', label: 'Notifications', icon: 'util/photo/icons8-notification.gif', isActive: activeMenu === 'notifications', badge: 9 },
  ];

  const settingsMenu: MenuItem[] = [
    { id: 'settings', label: 'Account', icon: 'util/photo/icons8-settings.gif', isActive: activeMenu === 'settings' },
    { id: 'support', label: 'Notifications', icon: 'util/photo/icons8-support-32.png', isActive: activeMenu === 'support' },
  ];

  const groupMenu: MenuItem[] = [
    { id: 'linkedin', label: 'Linkedin', icon: 'util/photo/icons8-linkedin-48.png', isActive: activeMenu === 'linkedin' },
    { id: 'twitter', label: 'Twitter', icon: 'util/photo/icons8-twitter-48.png', isActive: activeMenu === 'twitter' },
    { id: 'facebook', label: 'Facebook', icon: 'util/photo/icons8-facebook-48.png', isActive: activeMenu === 'facebook' },
    { id: 'instagram', label: 'Instagram', icon: 'util/photo/icons8-instagram-48.png', isActive: activeMenu === 'instagram' },
  ];

  // Task data
  const tasks: TaskItem[] = [
    {
      id: '1',
      title: 'Client Review Login',
      module: 'Login Module',
      description: 'This is some placeholder content the Profile tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.',
      time: 'Today 10:00 PM',
      assignedUsers: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RcVhcKs02zGuJJblQC1C_gHaHa%26pid%3DApi&f=1&ipt=7c64c50bdb19cdf9a7bd0466792579e3b98889d495d6c0139a15a04a3fb75273&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7ChezUWmk3JrT7FS_0e2kAHaE8%26pid%3DApi&f=1&ipt=0578191efb8dd60d53bb23ff86884846ad94b2d04008c02189286d463cc4f07d&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.74kAL4j6%252bbDofA0t2%252fl5WA%26pid%3DApi&f=1&ipt=733f5f6b11d9cd06e3531337dd14d64de5d8d518a508945f110101171f936fdc&ipo=images',
        'https://www.mordeo.org/files/uploads/2020/05/PUBG-Girl-Sniper-With-Squad-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg'
      ]
    },
    {
      id: '2',
      title: 'Client Review Login',
      module: 'SignUp Module',
      description: 'This is some placeholder content the Profile tab\'s associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.',
      time: 'Today 10:00 PM',
      assignedUsers: [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RcVhcKs02zGuJJblQC1C_gHaHa%26pid%3DApi&f=1&ipt=7c64c50bdb19cdf9a7bd0466792579e3b98889d495d6c0139a15a04a3fb75273&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7ChezUWmk3JrT7FS_0e2kAHaE8%26pid%3DApi&f=1&ipt=0578191efb8dd60d53bb23ff86884846ad94b2d04008c02189286d463cc4f07d&ipo=images',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.74kAL4j6%252bbDofA0t2%252fl5WA%26pid%3DApi&f=1&ipt=733f5f6b11d9cd06e3531337dd14d64de5d8d518a508945f110101171f936fdc&ipo=images',
        'https://www.mordeo.org/files/uploads/2020/05/PUBG-Girl-Sniper-With-Squad-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg'
      ]
    }
  ];

  // Card images for dashboard
  const cardImages = [
    './util/image/pexels-artem-saranin-1496373.jpg',
    './util/image/pexels-craig-adderley-1563356.jpg',
    './util/image/pexels-delcho-dichev-1651165.jpg',
    './util/image/pexels-nikita-lyamkin-1553406.jpg',
    './util/image/pexels-pixabay-247431.jpg',
    './util/image/pexels-pixabay-459225.jpg',
    './util/image/pexels-rahul-716398.jpg',
    './util/image/pexels-rahul-716398.jpg',
    './util/image/pexels-delcho-dichev-1651165.jpg',
    './util/image/pexels-roberto-shumski-1903702.jpg'
  ];

  // Handle menu click
  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
  };

  // Render menu items
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item) => (
      <div key={item.id} className="row">
        <div
          className={`col-12 ${item.isActive ? 'navBarElementActive' : 'navBarElementInactive'}`}
          style={{
            marginLeft: '0.5rem',
            marginBottom: '1px',
            borderRadius: '5px',
          }}
        >
          <a
            href="#"
            className={`list-group-item list-group-item-action ${item.isActive ? 'navbarActiveLinkAlignment' : 'navbarInactiveLinkAlignment'}`}
            aria-current="true"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.id);
            }}
          >
            <img
              src={item.icon}
              alt=""
              style={{ marginRight: '2px' }}
              width="18"
              height="16"
            />
            {item.label}
            {item.badge && (
              <span
                className="badge bg-danger position-absolute top-50 start-100 translate-middle"
                style={{ marginLeft: '-1rem' }}
              >
                {item.badge}
              </span>
            )}
          </a>
        </div>
      </div>
    ));
  };

  // Render task cards
  const renderTaskCards = (items: TaskItem[]) => {
    return items.map((task) => (
      <div
        key={task.id}
        className="card"
        style={{
          marginTop: '1rem',
          backgroundColor: '#f6f6f6',
          width: '20vw',
          marginLeft: '-10%',
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <div
                className="row"
                style={{
                  fontWeight: 500,
                  fontSize: 'medium',
                  paddingLeft: '1rem',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                {task.title}
              </div>
              <div
                className="row"
                style={{
                  paddingLeft: '1rem',
                  fontSize: 'small',
                  fontWeight: 400,
                  fontFamily: 'Sans, sans-serif'
                }}
              >
                {task.module}
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <a href="" style={{ textAlign: 'right' }}>
                  <img
                    src="util/photo/icons8-done-48.png"
                    width="18"
                    height="16"
                    alt="Done"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="container-fluid"
              style={{ fontSize: 'small', paddingLeft: '1rem', fontFamily: 'Sans, sans-serif' }}
            >
              <span style={{ fontWeight: 'bold' }}>Issue Description:</span>
              {task.description}
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <div
                className="row"
                style={{
                  fontWeight: 100,
                  fontSize: '1rem',
                  paddingLeft: '1rem',
                  fontFamily: 'Sans, sans-serif'
                }}
              >
                {task.time}
              </div>
            </div>
            <div className="col-5">
              <div className="row">
                <div style={{ textAlign: 'right' }}>
                  {task.assignedUsers.map((user, index) => (
                    <img
                      key={index}
                      src={user}
                      alt="Avatar"
                      className="avatar"
                      style={{ marginLeft: index > 0 ? '-0.6rem' : '0' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Render dashboard cards
  const renderDashboardCards = () => {
    return cardImages.map((image, index) => (
      <div key={index} className="col">
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            height="200rem"
            alt="Dashboard"
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'Roboto, sans-serif' }}>Card title</h5>
            <p className="card-text" style={{ fontFamily: 'Sans, sans-serif' }}>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="row">
      {/* Navbar */}
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand heading" href="#">
              <img
                src="util/photo/icons8-counter-strike-source-48.png"
                alt=""
                width="30"
                height="28"
                className="d-inline-block align-text-top"
              />
              &nbsp;Counter Strike
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-content">
                <li className="nav-item">
                  <a className="nav-link active heading" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link heading" href="#">
                    Order History
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle heading"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Inventory
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ borderColor: 'white' }}
                  >
                    <li><a className="dropdown-item list" href="#">Vegetables</a></li>
                    <li><a className="dropdown-item list" href="#">Cereals</a></li>
                    <li><a className="dropdown-item list" href="#">Edible Oils</a></li>
                    <li>
                      <hr className="dropdown-divider" style={{ color: 'antiquewhite' }} />
                    </li>
                    <li><a className="dropdown-item list" href="#">Gas</a></li>
                    <li><a className="dropdown-item list" href="#">Utensils</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link heading" href="#" tabIndex={-1}>
                    Market Place
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link heading" href="#" tabIndex={-1}>
                    Payment History
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <div className="row" style={{ marginLeft: '0.5%' }}>
                  <div
                    className="col-6"
                    style={{ borderRight: '1px solid rgb(143, 140, 140)' }}
                  >
                    <div className="row" style={{ fontFamily: 'Sans, sans-serif' }}>16:44</div>
                    <div className="row" style={{ fontSize: 'x-small', fontFamily: 'Sans, sans-serif' }}>
                      Dec 29,2022
                    </div>
                  </div>
                  <div className="col-6 align-middle">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src="util/photo/icons8-notification.gif"
                          alt=""
                          width="18"
                          height="16"
                        />
                      </div>
                      <div className="col-4">
                        <img
                          src="util/photo/icons8-message-read.gif"
                          alt=""
                          width="18"
                          height="16"
                        />
                      </div>
                      <div className="col-4">
                        <img
                          src="util/photo/icons8-favorites-48.png"
                          alt=""
                          width="18"
                          height="16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-2" style={{ position: 'fixed', left: '0rem' }}>
          <div className="row" style={{ marginTop: '2%' }}>
            <div className="input-group flex-nowrap">
              <span className="input-group-text searchIconContainer" id="addon-wrapping">
                <img
                  src="util/photo/icons8-search-50.png"
                  alt=""
                  width="18"
                  height="16"
                />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="addon-wrapping"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderLeftStyle: 'hidden',
                  marginLeft: '-1rem',
                  borderTopRightRadius: '0.5rem',
                  borderBottomRightRadius: '0.5rem',
                  fontFamily: 'Sans, sans-serif'
                }}
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: '1%' }}>
            <h6 style={{ fontFamily: 'Roboto, sans-serif' }}>Menu</h6>
            <div className="col-12">
              <div className="list-group" id="">
                {renderMenuItems(mainMenu)}
              </div>
            </div>
          </div>

          <hr style={{ color: 'black', height: '0.5px' }} />

          <div className="row" style={{ marginTop: '1%' }}>
            <div className="col-12">
              <div className="list-group">
                {renderMenuItems(settingsMenu)}
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '1%' }}>
            <h6 style={{ fontFamily: 'Roboto, sans-serif' }}>Group</h6>
            <div className="col-12">
              <div className="list-group">
                {renderMenuItems(groupMenu)}
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '1%' }}>
            <div className="col-1">
              <hr className={activeMenu === 'theme' ? 'hrActive' : 'hrInactive'} />
            </div>
            <div
              className="col-10"
              style={{ backgroundColor: '#f6f6f6', borderRadius: '0.5rem' }}
            >
              <div className="row" style={{ margin: '2px' }}>
                <div
                  className={`col-6 ${theme === 'light' ? 'bg-white' : ''}`}
                  style={{
                    borderRadius: '0.5rem',
                    marginTop: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Sans, sans-serif',
                    padding: '0.25rem'
                  }}
                  onClick={() => setTheme('light')}
                >
                  <img
                    src="util/photo/icons8-sun.gif"
                    alt=""
                    width="18"
                    height="16"
                  />
                  Light
                </div>
                <div
                  className={`col-6 ${theme === 'dark' ? 'bg-white' : ''}`}
                  style={{
                    borderRadius: '0.5rem',
                    marginTop: '2px',
                    cursor: 'pointer',
                    fontFamily: 'Sans, sans-serif',
                    padding: '0.25rem'
                  }}
                  onClick={() => setTheme('dark')}
                >
                  <img
                    src="util/photo/icons8-moon-and-stars-24.png"
                    alt=""
                    width="18"
                    height="16"
                  />
                  Dark
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '1%' }}>
            <div
              className="col-12"
              style={{ backgroundColor: 'white', borderRadius: '0.5rem' }}
            >
              <div className="row" style={{ margin: '2px' }}>
                <div
                  className="col-3"
                  style={{ backgroundColor: 'white', marginTop: '2px' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1783&q=80"
                    style={{ borderRadius: '0.5rem' }}
                    alt="Profile"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="col-7">
                  <div className="row" style={{ fontFamily: 'Roboto, sans-serif' }}>Amit Mohanta</div>
                  <div className="row" style={{ fontWeight: 100, fontSize: 'x-small', fontFamily: 'Sans, sans-serif' }}>
                    amitmohanta@gmail.com
                  </div>
                </div>
                <div className="col-1">
                  <a href="">
                    <img
                      src="util/photo/icons8-imac-exit-24.png"
                      alt="Logout"
                      width="18"
                      height="16"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard */}
        <div
          className="col-7 scrollBar"
          style={{
            position: 'relative',
            overflow: 'auto',
            height: '900px',
            left: '16.5%',
          }}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: '#f6f6f6',
              borderRadius: '0.5rem',
              marginBottom: '10rem',
            }}
          >
            <h4 style={{ paddingTop: '1%', fontFamily: 'Roboto, sans-serif' }}>Dashboard</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {renderDashboardCards()}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-3" style={{ position: 'fixed', right: '0%' }}>
          <div className="container-fluid" style={{ marginRight: 0 }}>
            <div className="row" style={{ marginTop: '0.5rem' }}>
              <div className="col-12">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
                      id="nav-home-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected={activeTab === 'nav-home'}
                      onClick={() => setActiveTab('nav-home')}
                      style={{ fontFamily: 'Sans, sans-serif' }}
                    >
                      Task
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'nav-profile' ? 'active' : ''}`}
                      id="nav-profile-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected={activeTab === 'nav-profile'}
                      onClick={() => setActiveTab('nav-profile')}
                      style={{ fontFamily: 'Sans, sans-serif' }}
                    >
                      Message
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'nav-contact' ? 'active' : ''}`}
                      id="nav-contact-tab"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected={activeTab === 'nav-contact'}
                      onClick={() => setActiveTab('nav-contact')}
                      style={{ fontFamily: 'Sans, sans-serif' }}
                    >
                      Modules
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  {/* Task Tab */}
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                        <div className="row heading" style={{ fontWeight: 600, fontSize: 'larger' }}>
                          Today's Task
                        </div>
                        <div className="row list" style={{ fontWeight: 400, fontSize: 'small' }}>
                          Thursday,29 2022
                        </div>
                      </div>
                      <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                        <button className="btn btn-primary btn-sm">New Task</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        All
                        <span className="badge bg-primary" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        Open
                        <span className="badge bg-danger" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                      <div className="col-4 list">
                        Close
                        <span className="badge bg-success" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                    </div>

                    <div
                      className="container-fluid"
                      id="right-body"
                      style={{ position: 'relative', overflow: 'scroll', height: '72vh' }}
                    >
                      {renderTaskCards(tasks)}
                      <div className="row" style={{ marginTop: '0.5rem' }}>
                        <div className="col-12">
                          <a href="#" style={{ textAlign: 'right', textDecoration: 'none', fontFamily: 'Sans, sans-serif' }}>
                            View More &gt;&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Tab */}
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-profile' ? 'show active' : ''}`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                        <div className="row heading" style={{ fontWeight: 600, fontSize: 'larger' }}>
                          Messages
                        </div>
                        <div className="row list" style={{ fontWeight: 400, fontSize: 'small' }}>
                          Thursday,29 2022
                        </div>
                      </div>
                      <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                        <button className="btn btn-primary btn-sm">New Task</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        Inbox
                        <span className="badge bg-primary">4</span>
                      </div>
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        Sent Mail
                      </div>
                      <div className="col-4 list">
                        Draft
                        <span className="badge bg-success">4</span>
                      </div>
                    </div>
                    {renderTaskCards(tasks.slice(0, 2))}
                    <div className="row">
                      <div className="col-12">
                        <a href="#" style={{ textAlign: 'right', textDecoration: 'none', fontFamily: 'Sans, sans-serif' }}>
                          View More &gt;&gt;
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Modules Tab */}
                  <div
                    className={`tab-pane fade ${activeTab === 'nav-contact' ? 'show active' : ''}`}
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <div className="col-5" style={{ margin: '1rem 0 1rem 1rem' }}>
                        <div className="row heading" style={{ fontWeight: 600, fontSize: 'larger' }}>
                          Assignments
                        </div>
                        <div className="row list" style={{ fontWeight: 400, fontSize: 'small' }}>
                          Thursday,29 2022
                        </div>
                      </div>
                      <div className="col-5" style={{ margin: '1.5rem 0 0 2rem' }}>
                        <button className="btn btn-primary btn-sm">New Task</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        All
                        <span className="badge bg-primary" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                      <div className="col-4 list" style={{ borderRight: '1px solid grey' }}>
                        Open
                        <span className="badge bg-danger" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                      <div className="col-4 list">
                        Close
                        <span className="badge bg-success" style={{ marginLeft: '0.5%' }}>
                          4
                        </span>
                      </div>
                    </div>
                    {renderTaskCards(tasks.slice(0, 2))}
                    <div className="row">
                      <div className="col-12">
                        <a
                          href="#"
                          style={{
                            textAlign: 'right',
                            textDecoration: 'none',
                            marginBottom: '0vh',
                            fontFamily: 'Sans, sans-serif'
                          }}
                        >
                          View More &gt;&gt;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;