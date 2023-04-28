import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
import {
  IoMdBriefcase,
  IoMdHome,
  IoMdPerson,
  IoMdSchool,
  IoMdContacts,
} from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import { Link } from 'react-scroll';

interface INavLink {
  path: string;
  icon: React.ReactNode;
}

export const Navbar = () => {
  const navLinks: INavLink[] = [
    { path: 'hero', icon: <IoMdHome /> },
    { path: 'about', icon: <IoMdPerson /> },
    { path: 'services', icon: <IoMdBriefcase /> },
    { path: 'experience', icon: <IoMdSchool /> },
    { path: 'works', icon: <FaLayerGroup /> },
    { path: 'reviews', icon: <MdReviews /> },
    { path: 'contact', icon: <IoMdContacts /> },
  ];

  return (
    <nav className='navbar'>
      <div className='navbar__border'>
        <div className='navbar__border-light'></div>
        <div className='navbar__border-grey'></div>
      </div>
      <div className='navbar__logo'>
        <Link to='hero' spy={true} smooth={true} offset={0} duration={500}>
          <h3 className='navbar__logo-title'>Д</h3>
        </Link>
      </div>
      <ul className='navbar__list'>
        {navLinks.map((navLink) => (
          <li key={navLink.path} className='navbar__item'>
            <Link
              activeClass='active'
              to={navLink.path}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {navLink.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
