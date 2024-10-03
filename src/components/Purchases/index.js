import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { getTestVariant } from '../../utils/testAB';
import {
  Container,
  Item,
  Date,
  Wrapper,
  Restaurant,
  RestaurantImage,
  Info,
  Name,
  OrderDetails,
  OrderNumber,
  Order,
  Evaluation,
  Message,
  Star,
  Menu,
  MenuButton,
  MenuText,
  HelpButton,
} from './styles';

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadPurchases() {
      const response = await api.get('purchases');
      setPurchases(response.data);
    }
    loadPurchases();

    const testVariant = getTestVariant();
    setVariant(testVariant); 
  }, []);

  return (
    <Container>
      {/* Mapear compras para cada item */}
      {purchases.map(item => (
        <Item key={item.id}>
          <Date>{item.date}</Date>
          <Wrapper>
            <Restaurant>
              <RestaurantImage source={{ uri: item.restaurant_url }} />
              <Info>
                <Name>{item.restaurant_name}</Name>
                <OrderNumber>Pedido entregue! {item.order_number}</OrderNumber>
              </Info>
            </Restaurant>
            <OrderDetails>
              <Order>{item.order}</Order>
            </OrderDetails>
            <Evaluation>
              <Message>Avaliação do pedido</Message>
              <Star>
                <MaterialIcons name="star" color="#FFCD32" size={20} />
                <MaterialIcons name="star" color="#FFCD32" size={20} />
                <MaterialIcons name="star" color="#FFCD32" size={20} />
                <MaterialIcons name="star" color="#FFCD32" size={20} />
                <MaterialIcons name="star" color="#FFCD32" size={20} />
              </Star>
            </Evaluation>
            <Menu>
              {/* Condicional para mostrar o botão de AJUDA ou texto normal */}
              {variant === 'A' ? (
                <MenuButton style={{ backgroundColor: 'red', borderRadius: 4 }}>
                  <MenuText>AJUDA</MenuText>
                </MenuButton>
              ) : (
                <MenuText>AJUDA</MenuText>
              )}
              <MenuButton>
                <MenuText>Detalhes</MenuText>
              </MenuButton>
            </Menu>
          </Wrapper>
        </Item>
      ))}
    </Container>
  );
}
