import React from 'react';
import { parseISO, format } from 'date-fns';

import { normalizeMoney } from '../../utils';

import { Table } from './styles';

export default function TableVisits({ visits, onUpdate, onDelete }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Representante</th>
          <th>Cliente</th>
          <th>Endereço</th>
          <th>Data da visita</th>
          <th>Custo</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {visits.map(v => (
          <tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.representative}</td>
            <td>{v.name}</td>
            <td>{v.address}</td>
            <td>{format(parseISO(v.date), "dd'/'MM'/'yyyy")}</td>
            <td>{normalizeMoney(v.cost)}</td>
            <td>
              <button id="update" onClick={() => onUpdate(v)} type="button">
                Editar
              </button>
            </td>
            <td>
              <button id="delete" onClick={() => onDelete(v)} type="button">
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
