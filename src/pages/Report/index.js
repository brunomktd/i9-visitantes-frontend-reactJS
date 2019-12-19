import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Title } from '../Main/styles';
import { List } from './styles';

export default class Report extends Component {
  state = {
    visits: {},
    costs: '',
  };

  async componentDidMount() {
    const response = await api.get('/reports');

    this.setState({ visits: response.data.topVisits[0] });
    this.setState({ costs: response.data.topCosts[0] });
  }

  render() {
    const { visits, costs } = this.state;
    return (
      <>
        <Container>
          <Title>Representante com mais visitas</Title>
          <List>
            <li>ID = {visits.id_representative}</li>
            <li>TOTAL DE VISITAS = {visits.count}</li>
          </List>
        </Container>
        <Container>
          <Title>Representante que mais gastou</Title>
          <List>
            <li>ID = {costs.id_representative}</li>
            <li>CUSTO TOTAL = {costs.total}</li>
          </List>
        </Container>
      </>
    );
  }
}
