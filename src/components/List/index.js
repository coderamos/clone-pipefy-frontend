import React from 'react';
import { MdAdd } from 'react-icons/md';

import Card from '../Card';
import { Container, Title } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <Title>{data.title}</Title>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              data={card}
              listIndex={listIndex}
              index={index}
            />
          );
        })}
      </ul>
    </Container>
  );
}
