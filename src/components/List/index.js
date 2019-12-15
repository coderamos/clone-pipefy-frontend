import React from 'react';

import Card from '../Card';

import { MdAdd } from 'react-icons/md';
import { Container, Title } from './styles';

export default function List({ data }) {
  return (
    <Container>
      <header>
        <Title>{data.title}</Title>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => {
          return <Card key={card.id} data={card} />;
        })}
      </ul>
    </Container>
  );
}
