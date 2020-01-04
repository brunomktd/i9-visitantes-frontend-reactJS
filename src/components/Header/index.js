import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo-branco.png';
import { Menu } from './styles';

export default function Header() {
  return (
    <Menu>
      <Link to="/">
        <img src={logo} alt="I9Lab" />
      </Link>
      <ul>
        <Link to="/">Visitas</Link>
        <Link to="/reports">Relatórios</Link>
      </ul>
    </Menu>
  );
}
