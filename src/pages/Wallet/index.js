import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { getTestVariant } from '../../utils/testAB';

import {
  Container,
  BackButton,
  Finances,
  Title,
  Value,
  QrCode,
  Options,
  Option,
  Message,
  Panel,
  Money
} from './styles';

export default function Wallet() {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Panel>
        <Finances>
          <Title>Seu saldo na carteira</Title>
          <Money>
            {/* Renderização condicional baseada na variante A/B */}
            <Value style={variant === 'B' ? { fontSize: 24, color: '#F01' } : { fontSize: 20 }}>R$ 46,50</Value>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="#F01"
            />
          </Money>
        </Finances>

        <QrCode>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#F01"
            size={28}
          />
          <Title>QR Code</Title>
        </QrCode>
      </Panel>

      <Options horizontal>
        {/* Alterando a apresentação das opções com base na variante */}
        {variant === 'A' ? (
          <>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="credit-card"
                size={35}
                color="#999"
              />
              <Message>Formas de pagamento</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="card-giftcard"
                size={35}
                color="#999"
              />
              <Message>Resgatar IFood Card</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="store"
                size={35}
                color="#999"
              />
              <Message>Por onde usar</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialCommunityIcons
                name="help-circle"
                size={35}
                color="#999"
              />
              <Message>Preciso de Ajuda</Message>
            </Option>
          </>
        ) : (
          <>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="credit-card"
                size={35}
                color="#999"
              />
              <Message>Pagamento Rápido</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="card-giftcard"
                size={35}
                color="#999"
              />
              <Message>Trocar o IFood Card</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialIcons
                name="store"
                size={35}
                color="#999"
              />
              <Message>Locais de Aceitação</Message>
            </Option>
            <Option onPress={() => {}}>
              <MaterialCommunityIcons
                name="help-circle"
                size={35}
                color="#999"
              />
              <Message>Suporte</Message>
            </Option>
          </>
        )}
      </Options>
    </Container>
  );
}

// navigation prop
Wallet.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'CARTEIRA',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  },

  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35}
      />
    </BackButton>
  )
});
