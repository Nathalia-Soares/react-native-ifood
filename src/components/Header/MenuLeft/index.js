import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { getTestVariant } from '../../../utils/testAB';
import { Container, Button, Title } from './styles';

function MenuLeft({ navigation }) {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      {/* Navegar para 'Dashboard' */}
      <Button onPress={() => navigation.navigate('Dashboard')}>
        <Title color={variant === 'A' ? 'red' : 'blue'}>Entrega</Title>
      </Button>
      {/* Navegar para 'PreviousRequests' */}
      <Button onPress={() => navigation.navigate('PreviousRequests')}>
        <Title disabled>Retirada</Title>
      </Button>
    </Container>
  );
};

export default withNavigation(MenuLeft);
