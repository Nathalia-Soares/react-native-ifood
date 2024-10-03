import React, { useState, useEffect } from 'react';
import Purchases from '../../components/Purchases';
import { getTestVariant } from '../../utils/testAB'; // Importando a função para o teste A/B

import { Container } from './styles';

export default function PreviousRequests() {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant(); // Define a variante do teste
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Purchases variant={variant} /> {/* Passando a variante para o componente Purchases */}
    </Container>
  );
}

PreviousRequests.navigationOptions = {
  title: 'ANTERIORES'
};