import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import api from '../../services/api';
import { getTestVariant } from '../../utils/testAB';
import {
  Container,
  CategoriesList,
  Title,
  Item,
  ItemImage,
  ItemTitle
} from './styles';

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function showCategories() {
      const response = await api.get('categories');
      setCategories(response.data);
    }
    showCategories();

    const testVariant = getTestVariant();
    setVariant(testVariant);
  }, []);

  return (
    <Container>
      <Input header placeholder="Busque por item ou loja" />

      <Title>{variant === 'A' ? 'Categorias Populares' : 'Explore Categorias'}</Title> {/* Título diferente baseado na variante */}
      <CategoriesList
        data={categories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Item>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{item.title}</ItemTitle>
            {/* Estilo ou comportamento diferente na variante B */}
            {variant === 'B' && <ItemTitle style={{ fontWeight: 'bold' }}>Novidade!</ItemTitle>}
          </Item>
        )}
      />
    </Container>
  );
};

Search.navigationOptions = {
  headerShown: false
};
