import React from 'react';
import Logo from '../assets/Logo.png';

const Header = ({ pages }) => {
  const pageLinks = pages.map(page => (
    <div className="item" key={page.text}>
      <a className="link" href={page.href}>
        <p>{page.text}</p>
      </a>
    </div>
  ));
  return (
    <nav className="header-container">
      {/* <div className="item home">
        <a href="/#" className="title">
          Rescue Pals
        </a>
      </div> */}
      <div className="logo">
        <a href="/#">
          <img src={Logo} alt="Rescue Pals Logo" />
        </a>
      </div>
      <div className="pages">{pageLinks}</div>
    </nav>
  );
};

export default Header;
