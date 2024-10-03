import styled from 'styled-components/native';

export const SuggestionList = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false
})`
  margin-top: 20px;
  padding-left: 5px;
`;

export const Item = styled.TouchableOpacity`
  align-items: center;
  margin-left: 15px;
  padding: ${props => props.variant === 'B' ? '10px' : '0'}; /* Adiciona padding se for B */
  background-color: ${props => props.variant === 'B' ? '#f8f8f8' : 'transparent'}; /* Fundo destacado para B */
  border: ${props => props.variant === 'B' ? '1px solid #FF7C01' : 'none'}; /* Borda colorida para B */
  border-radius: ${props => props.variant === 'B' ? '5px' : '0'}; /* Bordas arredondadas para B */
`;

export const SuggestionImage = styled.Image`
  width: 100px;
  height: 50px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  margin-top: 3px;
  color: #999;
`;
