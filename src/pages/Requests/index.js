import React, { useState, useEffect } from 'react';
import { View, Image as RNImage } from 'react-native';
import { getTestVariant } from '../../utils/testAB';

import {
  Container,
  Wrapper,
  Warning,
  Suggestion,
  Image,
  Message
} from './styles';

export default function Requests() {
  const [requests, setRequests] = useState(null);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      {/* Se existir requisições */}
      {requests ? (
        <View />
      /* Senão.. */
      ) : (
        <Wrapper>
          {/* Imagem diferente baseada na variante */}
          <RNImage
            source={
              variant === 'A'
                ? require('../../assets/no_requests_a.png') // Imagem para variante A
                : require('../../assets/no_requests_b.png') // Imagem para variante B
            }
            style={{ width: 100, height: 100 }}
          />
          <Warning>Nenhum pedido em andamento!</Warning>
          <Message>
            {/* Mensagens diferentes baseadas na variante */}
            <Suggestion>
              {variant === 'A' 
                ? "Que tal experimentar um lugar novo?" 
                : "Você ainda não fez nenhum pedido!"}
            </Suggestion>
            <Suggestion>É só selecionar Início</Suggestion>
          </Message>
        </Wrapper>
      )}
    </Container>
  );
}

Requests.navigationOptions = {
  title: 'ANDAMENTO'
};
