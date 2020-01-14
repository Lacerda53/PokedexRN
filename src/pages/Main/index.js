import React, { Component } from 'react';
import api from '~/services/api';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import pokeball from '~/assets/pokeballbg.png';
import { FlatList, ActivityIndicator } from 'react-native';
import MyLoading from '~/Components/myLoading.js';
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
    isLoading: false
  };

  componentDidMount() {
    this.loadPokemons();
  }
  loadPokemons = async () => {
    this.setState({isLoading: true})
    const response = await api.get("/pokedex");

    const repositories = await response.data;

    this.setState({
      pokemons: repositories, isLoading: false
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>Pokedex</Title>
        </Header>
        <Body>
          <MyLoading show={this.state.isLoading}/>
          <FlatList
            keyExtractor={this.state.pokemons.id}
            data={this.state.pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <Card style={{ backgroundColor: item.corFundo }} onPress={() => this.NavigateToDetail(item)}>
                <Name>{item.nome}</Name>
                <Type>
                  <TypeText></TypeText>
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
