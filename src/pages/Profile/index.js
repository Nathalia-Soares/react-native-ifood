import React, { useEffect, useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Person from '../../components/Header/Person';
import { getTestVariant } from '../../utils/testAB';

import {
  Container,
  OptionsList,
  Option,
  Info,
  Title,
  Description,
  Wrapper,
  AdditionalMenu,
  AdditionalOption,
  OptionName
} from './styles';

// navigation prop
export default function Profile({ navigation }) {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <OptionsList>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={35}
            color={variant === 'B' ? "#FF7C01" : "#333"}
          />
          <Info>
            <Title>{variant === 'B' ? "Notificações Importantes" : "Notificações"}</Title> {/* Texto modificado na variante B */}
            <Description>{variant === 'B' ? "Verifique as notificações mais relevantes." : "Minha central de notificações"}</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        {/* Navegar para Wallet' */}
        <Option onPress={() => navigation.navigate('Wallet')}>
          <MaterialCommunityIcons
            name="wallet-outline"
            size={35}
            color={variant === 'B' ? "#FF7C01" : "#333"}
          />
          <Info>
            <Title>{variant === 'B' ? "Carteira Digital" : "Carteira"}</Title>
            <Description>{variant === 'B' ? "Saldo e QR Code para pagamentos." : "Meu saldo e QR Code"}</Description>
          </Info>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </Option>

        {/* Outras opções aqui... */}
        
      </OptionsList>

      <AdditionalMenu>
        <AdditionalOption>
          <Wrapper>
            <MaterialCommunityIcons
              name="lifebuoy"
              size={35}
              color={variant === 'B' ? "#FF7C01" : "#CDC"}
            />
            <OptionName>{variant === 'B' ? "Precisa de Ajuda?" : "Ajuda"}</OptionName> {/* Texto modificado na variante B */}
          </Wrapper>
          <MaterialIcons
            name="keyboard-arrow-right"
            color="#999"
            size={20}
          />
        </AdditionalOption>

        {/* Outras opções adicionais aqui... */}
        
      </AdditionalMenu>
    </Container>
  );
}

Profile.navigationOptions = {
  headerTitleStyle: {
    display: 'none'
  },
  headerStyle: {
    height: 130
  },
  headerLeft: () => <Person />
};
