import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { getTestVariant } from '../../utils/testAB';
import
  {
    Container,
    Header,
    Title,
    CategoriesList,
    Item,
    ItemImage,
    ItemTitle
  } from './styles';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      setCategories(response.data);
    }

    const testVariant = getTestVariant();
    setVariant(testVariant);

    loadCategories();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        {/* Mapear categorias para cada item */}
        {categories.map(item => (
          <Item key={item.id}>
            <ItemImage
              source={{ uri: item.categorie_url }}
              variant={variant}
            />
            <ItemTitle>{item.title}</ItemTitle>
          </Item>
        ))}
      </CategoriesList>
    </Container>
  );
};
