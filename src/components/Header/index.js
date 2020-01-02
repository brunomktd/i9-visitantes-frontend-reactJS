import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from './styles';

export default function Header() {
  return (
    <Menu>
      <h1>LOGO</h1>
      <ul>
        <Link to="/">Visitas</Link>
        <Link to="/reports">Relatórios</Link>
      </ul>
    </Menu>
  );
}
