import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { colorRed, colorBlue } from '../../utils/colors';
import { getTestVariant } from '../../utils/testAB';
import {
  Container,
  Location,
  AddressMenu
} from './styles';

export default function Address() {
  const [variant, setVariant] = useState('A'); // estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <AddressMenu>
        <Location>Próximo de Res. Franciscano...</Location>

        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={variant === 'A' ? colorRed : colorBlue}
        />
      </AddressMenu>
    </Container>
  );
};
