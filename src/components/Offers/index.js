import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { formatNumber } from '../../utils/formatNumber';
import { getTestVariant } from '../../utils/testAB'; 
import { colorRed, colorBlue } from '../../utils/colors'; 
import {
  Container,
  Header,
  Info,
  Title,
  SubTitle,
  SeeMoreButton,
  SeeMoreText,
  OfferList,
  ItemInfo,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  OldPrice,
  Price
} from './styles';

// navigation prop
function Offers({ navigation }) {
  const [offers, setOffers] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadOffers() {
      const response = await api.get('offers');

      const data = response.data.map(offer => ({
        id: offer.id,
        offer_url: offer.offer_url,
        title: offer.title,
        newPrice: formatNumber(offer.newPrice),
        price: formatNumber(offer.price),
        ingredients: offer.ingredients,
        delivery: offer.delivery,
        delay: offer.delay,
        icon: offer.icon
      }));

      setOffers(data);
    }
    loadOffers();

    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  function handleNavigateItem(item) {
    navigation.navigate('Item', { item });
  }

  return (
    <Container>
      <Header>
        <Info>
          <Title>Comida boa e barata!</Title>
          <SubTitle>Pratos com frete grátis.</SubTitle>
        </Info>

        <SeeMoreButton onPress={() => navigation.navigate('Search')}>
          {/* Alterar a cor com base na variante do teste A/B */}
          <SeeMoreText style={{ color: variant === 'A' ? colorRed : colorBlue }}>
            Ver mais
          </SeeMoreText>
        </SeeMoreButton>
      </Header>

      <OfferList horizontal>
        {offers.map(offer => (
          <Item key={offer.id} onPress={() => handleNavigateItem(offer)}>
            <ItemImage source={{ uri: offer.offer_url }} />
            <ItemInfo>
              <ItemTitle>{offer.title}</ItemTitle>
              <ItemPrice>
                <Price>{offer.newPrice}</Price>
                <OldPrice>{offer.price}</OldPrice>
                <MaterialIcons name="local-offer" size={15} color="#000" />
              </ItemPrice>
            </ItemInfo>
          </Item>
        ))}
      </OfferList>
    </Container>
  );
}

export default withNavigation(Offers);
