import React from 'react';
import { parseISO, format } from 'date-fns';

import { Table } from './styles';

export default function TableVisits({ visits, theaders, onUpdate, onDelete }) {
  const tableHeaders = headers => {
    return (
      <tr>
        <th>#</th>
        {headers.map(h => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    );
  };

  return (
    <Table>
      <thead>{tableHeaders(theaders)}</thead>
      <tbody>
        {visits.map(v => (
          <tr key={v.id}>
            <td>{v.id}</td>
            <td>{v.representative}</td>
            <td>{v.name}</td>
            <td>{v.address}</td>
            <td>{format(parseISO(v.date), "dd'/'MM'/'yyyy")}</td>
            <td>{v.cost}</td>
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
