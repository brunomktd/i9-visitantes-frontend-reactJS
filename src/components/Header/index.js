import React from 'react';

import { Menu } from './styles';

export default function Header() {
  return (
    <Menu>
      <h1>LOGO</h1>
      <ul>
        <a href="/">Visitas</a>
        <a href="/reports">Relatórios</a>
      </ul>
    </Menu>
  );
}
