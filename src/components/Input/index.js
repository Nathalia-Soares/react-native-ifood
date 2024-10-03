import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { colorRed, colorBlue } from '../../utils/colors'; // Adicionar colorBlue
import { getTestVariant } from '../../utils/testAB'; // Importar função para o teste A/B
import { Container, TextInput } from './styles';

//props
export default function Input({ placeholder, header }) {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container header={header}>
      <MaterialIcons
        name="search"
        size={25}
        color={variant === 'A' ? colorRed : colorBlue} // Mudar a cor com base no grupo
      />
      <TextInput placeholder={placeholder} />
    </Container>
  );
};
