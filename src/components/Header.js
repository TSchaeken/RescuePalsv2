import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.png';

const Header = () => {
  const pages = [
    { text: `Adopt`, href: `/adopt` },
    { text: `Donate`, href: `/donate` },
    { text: `Contact`, href: `/contact` }
  ];
  const pageLinks = pages.map(page => (
    <div className="item" key={page.text}>
      <Link className="link" to={page.href}>
        <p>{page.text}</p>
      </Link>
    </div>
  ));
  return (
    <nav className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Rescue Pals Logo" />
        </Link>
      </div>
      <div className="pages">{pageLinks}</div>
    </nav>
  );
};

export default Header;
