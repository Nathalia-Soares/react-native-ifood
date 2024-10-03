import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';

import Address from '../../components/Address';
import Input from '../../components/Input';
import DiscountCoupon from '../../components/DiscountCoupon';
import Suggestions from '../../components/Suggestions';
import Promotions from '../../components/Promotions';
import Offers from '../../components/Offers';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';
import MenuRight from '../../components/Header/MenuRight';
import MenuLeft from '../../components/Header/MenuLeft';
import { getTestVariant } from '../../utils/testAB';

import { Container } from './styles';

function Dashboard() {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Address />
      <Input placeholder="Busque por item ou loja" />
      <DiscountCoupon />
      
      {/* Alterando a ordem das seções ou adicionando uma nova seção para o grupo B */}
      {variant === 'B' ? (
        <>
          <Promotions />
          <Suggestions />
          <Offers />
          <Categories />
          <Restaurants title="Restaurantes" display />
        </>
      ) : (
        <>
          <Suggestions />
          <Promotions />
          <Offers />
          <Categories />
          <Restaurants title="Restaurantes" display />
        </>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerTitleStyle: {
    display: 'none'
  },
  headerStyle: {
    height: 70
  },
  MenuRight: () => <MenuRight />,
  MenuLeft: () => <MenuLeft />
};

export default withNavigationFocus(Dashboard);
