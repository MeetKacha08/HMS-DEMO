import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/patient"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'collapsed'}`
              }
            >
              <span>Patients</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/doctor"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'collapsed'}`
              }
            >
              <span>Doctors</span>
            </NavLink>
          </li>

        </ul>
      </aside>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
