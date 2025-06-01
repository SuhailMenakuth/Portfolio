import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  // Map paths to section names
  const getSectionName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'About Me';
      case '/projects':
        return 'Projects';
      case '/creators':
        return 'Creators';
      case '/blog':
        return 'Blog';
      default:
        return 'About Me';
    }
  };

  const sectionName = getSectionName(location.pathname);

  // Reusable class function for link
  const linkClass = ({ isActive }) =>
    `nav-link px-3 py-2 rounded text-end  ${
      isActive
        ? 'fw-semibold text-dark  '
        : 'text-secondary'
    }`;

  return (
    <div className="d-flex justify-content-between align-items-center px-5 py-3  ">
      {/* Left Side: Section Name */}
     <div className="fs-5 navbar-font text-uppercase d-none d-sm-block">
       {sectionName}
     </div>

      {/* Right Side: Nav Links */}
      <nav className="nav"> 
        <NavLink to="/about-me" end className={linkClass}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        {/* <NavLink to="/creators" className={linkClass}>
          Creators
        </NavLink>
        <NavLink to="/blog" className={linkClass}>
          Blog
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Nav;
