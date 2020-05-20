import React from 'react';
import { render } from '@testing-library/react';

test('Necessário um botão para adicionar a tarefa.', () => {
  const { getByTestId } = render(<app />);
  const temBotao = getByTestId('botao');
  expect(temBotao).toBeInTheDocument();
});