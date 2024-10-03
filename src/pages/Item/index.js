import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import
  {
    Container,
    ItemImage,
    ItemTitle,
    ItemIngredient,
    ItemPrice,
    OldPrice,
    Info,
    Details,
    Delivery,
    DeliveryTitle,
    DeliveryDelay,
    Wrapper,
    BackButton,
    LeftHeader,
    DrinkHeader,
    Message,
    SubMessage,
    DrinkItem,
    DrinkTitle,
    DrinkPrice,
    Warning,
    WarningText
  } from './styles';

import { getTestVariant } from '../../utils/testAB';

// navigation prop
export default function Item({ navigation }) {
  // Obter param. 'item'
  const item = navigation.getParam('item');
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Details>
        <ItemImage source={{ uri: item.offer_url }} />
        <ItemTitle>{ item.title }</ItemTitle>
        <ItemIngredient>{ item.ingredients }</ItemIngredient>
        <Info>
          <ItemPrice>{ item.newPrice }</ItemPrice>
          <OldPrice>{ item.price }</OldPrice>
        </Info>

        <Delivery>
          <Wrapper>
            <MaterialIcons
              name={ item.icon }
              size={22}
              color="#F01"
            />
            <DeliveryTitle>{ item.delivery }</DeliveryTitle>
          </Wrapper>
          <DeliveryDelay>{ item.delay }</DeliveryDelay>
        </Delivery>
      </Details>

      <DrinkHeader>
        <LeftHeader>
          <Message>Escolha sua bebida</Message>
          <SubMessage>Escolha 1 opção</SubMessage>
        </LeftHeader>
        <Warning>
          <WarningText>OPCIONAL</WarningText>
        </Warning>
      </DrinkHeader>

      {/* Mudança no Layout dos Itens de Bebida com base na variante */}
      {[ // Lista de bebidas
        { title: "Coca-cola 600ml", price: "+ R$ 6,00" },
        { title: "Fatto Bene uva 600ml", price: "+ R$ 8,00" },
        { title: "Fanta uva 300ml", price: "+ R$ 4,50" },
        { title: "Poty Guaraná 300ml", price: "+ R$ 4,50" }
      ].map((drink, index) => (
        <DrinkItem key={index}>
          <LeftHeader>
            <DrinkTitle>{drink.title}</DrinkTitle>
            <DrinkPrice>{drink.price}</DrinkPrice>
          </LeftHeader>
          <MaterialIcons
            name="add"
            size={22}
            color={variant === 'B' ? "#007BFF" : "#000"}
          />
        </DrinkItem>
      ))}
    </Container>
  );
}

Item.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'DETALHES DO ITEM',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35} />
    </BackButton>
  ),
});
