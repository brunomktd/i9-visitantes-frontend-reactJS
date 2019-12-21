import React, { Component } from 'react';
import { parseISO, format } from 'date-fns';
import api from '../../services/api';

import { Title, Container, Form, SubmitButton, Table } from './styles';

export default class Main extends Component {
  state = {
    id: '',
    representative: '',
    name: '',
    address: '',
    date: '',
    cost: '',
    visits: [],
  };

  async componentDidMount() {
    const resp = await api.get('/visits');

    if (resp.data) {
      this.setState({ visits: resp.data });
    }

    const visits = localStorage.getItem('visits');

    if (visits) {
      this.setState({ visits: JSON.parse(visits) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { visits } = this.state;
    if (prevState.visits !== visits) {
      localStorage.setItem('visits', JSON.stringify(visits));
    }
  }

  handleRepresentativeChange = e => {
    this.setState({ representative: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleAddressChange = e => {
    this.setState({ address: e.target.value });
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handleCostChange = e => {
    this.setState({ cost: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      id,
      representative,
      name,
      address,
      date,
      cost,
      visits,
    } = this.state;

    if (id === '') {
      console.log('Cadastra');
      const response = await api.post('/visits', {
        id_representative: representative,
        name,
        address,
        dt_visit: date,
        cost,
      });

      this.setState({
        visits: [...visits, response.data],
        representative: '',
        name: '',
        address: '',
        date: '',
        cost: '',
      });
    } else {
      const respUpdate = await api.put(`/visits/${id}`, {
        id,
        id_representative: representative,
        name,
        address,
        dt_visit: date,
        cost,
      });

      this.setState({
        visits: [
          ...visits.filter(v => v.id !== respUpdate.data.id),
          respUpdate.data,
        ],
        id: '',
        representative: '',
        name: '',
        address: '',
        date: '',
        cost: '',
      });
    }
  };

  handleDelete = async e => {
    const { visits } = this.state;
    const { id } = e;

    await api.delete(`/visits/${id}`);

    this.setState({ visits: visits.filter(v => v !== e) });
    alert('Usuário deletado com sucesso');
  };

  handleUpdate = async e => {
    const date = format(parseISO(e.date), "yyyy'-'MM'-'dd");

    this.setState({
      id: e.id,
      representative: e.representative,
      name: e.name,
      address: e.address,
      date,
      cost: e.cost,
    });
  };

  render() {
    const {
      id,
      representative,
      name,
      address,
      date,
      cost,
      visits,
    } = this.state;

    return (
      <>
        <Container>
          <Title>Visitas</Title>
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor="representative">
              Código do representante:
              <input
                id="representative"
                type="number"
                placeholder="ID do representante"
                value={representative}
                onChange={this.handleRepresentativeChange}
              />
            </label>
            <label htmlFor="name">
              Nome do cliente:
              <input
                id="name"
                type="text"
                placeholder="Nome do cliente"
                value={name}
                onChange={this.handleNameChange}
              />
            </label>
            <label htmlFor="address">
              Endereço:
              <input
                id="address"
                type="text"
                placeholder="Endereço, 24 - Barueri - SP"
                value={address}
                onChange={this.handleAddressChange}
              />
            </label>
            <label htmlFor="date">
              Dia da visita:
              <input
                id="date"
                type="date"
                placeholder="Data da visita"
                value={date}
                onChange={this.handleDateChange}
              />
            </label>
            <label htmlFor="cost">
              Custo com a viagem:
              <input
                id="cost"
                type="text"
                placeholder="R$ 300.20"
                value={cost}
                onChange={this.handleCostChange}
              />
            </label>
            <SubmitButton>{id === '' ? 'Cadastrar' : 'Atualizar'}</SubmitButton>
          </Form>
        </Container>

        <Container>
          <Title>Tabela de Visitas</Title>
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
                  <td>{v.date}</td>
                  <td>{v.cost}</td>
                  <td>
                    <button
                      id="update"
                      onClick={() => this.handleUpdate(v)}
                      type="button"
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      id="delete"
                      onClick={() => this.handleDelete(v)}
                      type="button"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
