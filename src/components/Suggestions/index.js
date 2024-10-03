import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getTestVariant } from '../../utils/testAB'; // Importando a função de teste A/B
import {
  SuggestionList,
  Item,
  SuggestionImage,
  Title
} from './styles';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadSuggestions() {
      // Obter dados da rota 'suggestions' da api fake
      const response = await api.get('suggestions');
      setSuggestions(response.data);
    }
    loadSuggestions();

    const testVariant = getTestVariant(); // Define a variante do teste
    setVariant(testVariant);
  }, []);

  return (
    <SuggestionList horizontal>
      {/* Mapear sugestões para cada item */}
      {suggestions.map(suggestion => (
        <Item key={suggestion.id} variant={variant}> {/* Passando a variante para o Item */}
          <SuggestionImage source={{ uri: suggestion.sugg_url }} />
          <Title>{suggestion.title}</Title>
        </Item>
      ))}
    </SuggestionList>
  );
};
