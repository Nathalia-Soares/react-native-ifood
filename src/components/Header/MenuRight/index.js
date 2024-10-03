import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getTestVariant } from '../../../utils/testAB'; // Importar função para o teste A/B

import { Container, Button } from './styles';

function MenuRight({ navigation }) {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      {/* Navegar para 'Wallet' */}
      <Button onPress={() => navigation.navigate('Wallet')}>
        <MaterialCommunityIcons
          name={variant === 'A' ? 'qrcode-scan' : 'wallet'} // Ícone dinâmico
          color="#F01"
          size={25}
        />
      </Button>
    </Container>
  );
}

export default withNavigation(MenuRight);
