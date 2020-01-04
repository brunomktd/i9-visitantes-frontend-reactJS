import React, { Component } from 'react';
import api from '../../services/api';

import Container from '../../components/Container';
import { Title } from '../Main/styles';
import { List } from './styles';

import { normalizeMoney } from '../../utils';

export default class Report extends Component {
  state = {
    visits: '',
    costs: '',
  };

  async componentDidMount() {
    const response = await api.get('/reports');

    this.setState({
      visits: response.data.topVisits[0],
      costs: response.data.topCosts[0],
    });
  }

  render() {
    const { visits, costs } = this.state;
    return (
      <>
        <Container>
          <Title>Representante com mais visitas</Title>
          <List>
            <div>
              <span className="representative">
                <span className="representative">
                  {visits.id_representative === undefined
                    ? 0
                    : visits.id_representative}
                </span>
              </span>
              <span>ID</span>
            </div>
            <div>
              <span className="total">
                {visits.count === undefined ? 0 : visits.count}
              </span>
              <span>TOTAL DE VISITAS</span>
            </div>
          </List>
        </Container>
        <Container>
          <Title>Representante que mais gastou</Title>
          <List>
            <div>
              <span className="representative">
                {costs.id_representative === undefined
                  ? 0
                  : costs.id_representative}
              </span>
              <span>ID</span>
            </div>
            <div>
              <span className="total">
                {costs.total === undefined
                  ? `R$ 0,00`
                  : normalizeMoney(costs.total)}
              </span>
              <span>CUSTO TOTAL</span>
            </div>
          </List>
        </Container>
      </>
    );
  }
}
