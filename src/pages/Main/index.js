import React, { Component } from 'react';
import api from '~/services/api';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import pokeball from '~/assets/pokeballbg.png';
import { FlatList } from 'react-native';
import {
  Container,
  Name,
  Header,
  Title,
  Body,
  Card,
  Type,
  Poke,
  Pokeball,
  TypeText,
  Ilustration
} from './styles';

export default class Main extends Component {
  state = {
    pokemons: [],
    tipoPoke: []
  };

  componentDidMount() {
    this.loadPokemons();
  }
  loadPokemons = async () => {
    const response = await api.get("/pokedex");

    const repositories = await response.data;

    this.setState({
      pokemons: repositories, tipoPoke: repositories.tipoPoke
    });
  }
  const
  render() {
    return (
      <Container>
        <Header>
          <Title>Pokedex</Title>
        </Header>
        <Body>
          <FlatList
            keyExtractor={this.state.pokemons.id}
            data={this.state.pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <Card style={{ backgroundColor: item.corFundo }} onPress={() => this.NavigateToDetail(item)}>
                <Name>{item.nome}</Name>
                <Type>
                  <TypeText>{item.tipoPoke.tipoPoke}</TypeText>
                </Type>
                <Poke>
                  <Pokeball source={pokeball}>
                    <Ilustration source={{ uri: item.imagem }} />
                  </Pokeball>
                </Poke>
              </Card>
            }
          />
        </Body>
      </Container>
    );
  }
}
