import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';

import InputTudo from '../InputTodo';

describe('Verificando o To Do List, exercicio.', () => {
  it('Necessário um botão para adicionar a tarefa.', async () => {
    const { getByTestId } = render(<InputTudo/>)
    await waitForElement(()=> getByTestId('botao'))})

  it('Botão precisa conter o texto "Adicionar".', async () => {
    const { getByDisplayValue } = render(<InputTudo/>)
    await waitForElement(()=> getByDisplayValue('Adicionar'))})
  
  it('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.', async () => {
    const { getByTestId } = render(<InputTudo/>)
    const change = await waitForElement(()=> getByTestId('escrever'))
    fireEvent.change(change, {target: {value: 'testando'}})
    expect(change.value).toBe('testando')
  })
})