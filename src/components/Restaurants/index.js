import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { getTestVariant } from '../../utils/testAB';
import {
  Container,
  Header,
  Title,
  RestaurantList,
  Item,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  Star,
  Categories,
  Distance,
  Delay
} from './styles';

// props
export default function Restaurants({ title, display }) {
  const [restaurants, setRestaurants] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurants');
      setRestaurants(response.data);
    }
    loadRestaurants();

    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Header display={display}>
        <Title>{title}</Title>
      </Header>

      <RestaurantList>
        {/* Mapear restaurantes para cada item */}
        {restaurants.map(item => (
          <Item key={item.id} variant={variant}> {/* Passando a variante para o Item */}
            <ItemImage source={{ uri: item.restaurant_url }} />
            <ItemInfo>
              <ItemTitle>{item.title}</ItemTitle>

              <ItemDescription>
                <MaterialIcons
                  name="star"
                  size={20}
                  color="#FF7C01" />
                <Star>{item.star ? item.star : 'Novo!'}</Star>
                <Categories>{item.categories}</Categories>
                <Distance>{item.distance}</Distance>
              </ItemDescription>
              <Delay>{item.delay}</Delay>
            </ItemInfo>
          </Item>
        ))}
      </RestaurantList>
    </Container>
  );
}
