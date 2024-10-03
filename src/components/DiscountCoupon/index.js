import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import { getTestVariant } from '../../utils/testAB'; // Função para definir o grupo do teste A/B
import { colorRed } from '../../utils/colors';
import
  {
    CouponButton,
    Divisor,
    Logo,
    Content,
    CouponInfo,
    Title,
    Validity
  } from './styles';

function DiscountCoupon() {
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            {/* Altera o título baseado no grupo do teste A/B */}
            <Title>
              {variant === 'A' ? 'Cupom de R$10' : 'Ganhe R$10 de desconto'}
            </Title>
            <Validity>Válido até as 17:30</Validity>
          </CouponInfo>
        </Content>

        <MaterialIcons
          name="keyboard-arrow-right"
          color={colorRed}
          size={20}
        />
      </Divisor>
    </CouponButton>
  );
}

export default withNavigation(DiscountCoupon);
