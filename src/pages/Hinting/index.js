import React, { useState, useEffect } from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

import
  {
    Container,
    BackButton,
    ExportButton
  } from './styles';

import { getTestVariant } from '../../utils/testAB';

export default function Hinting() {
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      {/* Alterando a ordem das seções para o grupo B */}
      {variant === 'B' ? (
        <>
          <Restaurants />
          <Categories />
        </>
      ) : (
        <>
          <Categories />
          <Restaurants />
        </>
      )}
    </Container>
  );
}

Hinting.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons
        name="keyboard-arrow-left"
        color="#F01"
        size={35} />
    </BackButton>
  ),
  title: `${navigation.getParam('promo').categorie}`,
  headerRight: () => (
    <ExportButton>
      <MaterialCommunityIcons
        name="export-variant"
        color="#F01"
        size={24} />
    </ExportButton>
  )
});
