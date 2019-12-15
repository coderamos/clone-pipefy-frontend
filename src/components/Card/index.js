import React from 'react';

import { Container, Label } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label => {
          return <Label key={label} color={label} />;
        })}
      </header>
      <p>{data.content}</p>
      <img src={data.user} alt="" />
    </Container>
  );
}
