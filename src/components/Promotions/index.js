import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';

import api from '../../services/api';
import { PromoList, Item, PromoImage } from './styles';
import { getTestVariant } from '../../utils/testAB'; // Importar a função de teste A/B

// navigation prop
function Promotions({ navigation }) {
  const [promotions, setPromotions] = useState([]);
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    async function loadPromotions() {
      const response = await api.get('promotions');
      setPromotions(response.data);
    }
    loadPromotions();

    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  function handleNavigate(promo) {
    navigation.navigate('Trending', { promo });
  }

  return (
    <PromoList horizontal>
      {promotions.map(promo => (
        <Item key={promo.id} onPress={() => handleNavigate(promo)}>
          {/* Alterar a largura da imagem com base na variante do teste A/B */}
          <PromoImage
            source={{ uri: promo.promo_url }}
            style={{ width: variant === 'A' ? 300 : 350 }}
          />
        </Item>
      ))}
    </PromoList>
  );
}

export default withNavigation(Promotions);
