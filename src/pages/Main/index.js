import React, { useState } from 'react';
import api from '../../services/api';

import { Title, Container, Form, SubmitButton, List } from './styles';

export default function Main() {
  const [visits, setVisits] = useState([]);
  const [representative, setRepresentative] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/visits', {
      id_representative: representative,
      name,
      address,
      dt_visit: date,
      cost,
    });

    setVisits(...visits, response.data);
    localStorage.setItem('visits', JSON.stringify(response));

    console.log(visits);
  }

  return (
    <>
      <Container>
        <Title>Visitas</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="representative">
            Código do representante:
            <input
              id="representative"
              type="number"
              placeholder="ID do representante"
              value={representative}
              onChange={e => setRepresentative(e.target.value)}
            />
          </label>
          <label htmlFor="name">
            Nome do cliente:
            <input
              id="name"
              type="text"
              placeholder="Nome do cliente"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              id="address"
              type="text"
              placeholder="Endereço, 24 - Barueri - SP"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </label>
          <label htmlFor="date">
            Dia da visita:
            <input
              id="date"
              type="date"
              placeholder="Data da visita"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </label>
          <label htmlFor="cost">
            Custo com a viagem:
            <input
              id="cost"
              type="text"
              placeholder="R$ 300,20"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </label>
          <SubmitButton>Cadastrar</SubmitButton>
        </Form>
      </Container>

      <Container>
        <Title>Tabela de Visitas</Title>
        <List />
      </Container>
    </>
  );
}
