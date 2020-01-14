import React, { Component } from 'react';
import api from '~/services/api';

import { Container, Header, Name, Code, Pokemon, Card, About } from './styles';

export default class Details extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    this.loadPokemons();
  }
  loadPokemons = async () => {
    const response = await api.get("/1");
    const repositories = await response.data;

    this.setState({
      pokemons: repositories
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Name>{this.state.pokemons.name}</Name>
          <Code></Code>
        </Header>
        <Pokemon />
        <Card>
          <About>

          </About>
        </Card>
      </Container>
    );
  }
}
