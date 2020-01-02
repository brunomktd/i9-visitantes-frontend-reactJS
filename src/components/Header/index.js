import React from 'react';
import { Link } from 'react-dom';

import { Menu } from './styles';

export default function Header() {
  return (
    <Menu>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Visitas</Link>
        </li>
        <li>
          <Link to="/reports">Relatórios</Link>
        </li>
      </ul>
    </Menu>
  );
}
