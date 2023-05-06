import styled from 'styled-components/native';

interface ITextInput {
   $lastOne?: boolean;
}

export const Input = styled.TextInput.attrs((_props) => {
   return {
      placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
   };
})<ITextInput>`
   background-color: white;
   width: 100%;
   background-color: rgba(255, 255, 255, 0.15);
   padding: 15px 7px;
   border-radius: 4px;
   color: white;
   margin-bottom: ${({ $lastOne }) => ($lastOne ? '10px' : '8px')};
`;
