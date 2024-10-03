import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../../services/api';
import { getTestVariant } from '../../../utils/testAB';
import
  {
    Container,
    Avatar,
    Info,
    Name,
    Message,
    ProfileButton
  } from './styles';

function Person() {
  const [profile, setProfile] = useState({});
  const [variant, setVariant] = useState('A'); // Estado para o teste A/B

  useEffect(() => {
    async function loadProfile() {
      // Obter dados da rota 'profile' da api fake
      const response = await api.get('profile');
      setProfile(response.data);
    }

    const testVariant = getTestVariant();
    setVariant(testVariant);

    loadProfile();
  }, []);

  return (
    <Container>
      <ProfileButton>
        <Avatar source={{ uri: profile.avatar_url }} />
        <Info>
          <Name>{ profile.name }</Name>
          {/* Alterar o texto baseado no grupo A/B */}
          <Message>{ variant === 'A' ? 'Editar perfil' : 'Atualizar informações' }</Message>
        </Info>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={20}
          color="#999"
        />
      </ProfileButton>
    </Container>
  );
};

export default withNavigation(Person);
