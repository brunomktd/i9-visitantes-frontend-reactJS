import React, { Component } from 'react';

import { Title, Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  render() {
    return (
      <>
        <Container>
          <Title>Visitas</Title>
          <Form onSubmit={() => {}}>
            <label>
              Código do representante:
              <input type="number" placeholder="ID do representante" />
            </label>
            <label>
              Nome do cliente:
              <input type="text" placeholder="Nome do cliente" />
            </label>
            <label>
              Endereço:
              <input type="text" placeholder="Endereço, 24 - Barueri - SP" />
            </label>
            <label>
              Dia da visita:
              <input type="date" placeholder="Data da visita" />
            </label>
            <label>
              Custo com a viagem:
              <input type="text" placeholder="R$ 300,20" />
            </label>

            <SubmitButton>Cadastrar</SubmitButton>
          </Form>
        </Container>

        <Container>
          <Title>Tabela de Visitas</Title>
          Tabela
        </Container>
      </>
    );
  }
}
