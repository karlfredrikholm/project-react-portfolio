import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './styled/Containers.styled';
import Paragraph from './styled/Paragraph.styled';

const Line = styled.span`
  border: 1px solid var(--sub-color);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--sub-color);
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.6rem;
`;

const Summary = () => {
  return (
    <SectionContainer bg>
      <Paragraph main summary>
        <Line />
        <Dot />
          Welcome! I&apos;m a freshly baked web developer named Fredrik. With a
          background in office management I now strive to keep my code as neat
          as possible. Always eager to deepen my knowledge and sharpen my coding
          skills.
      </Paragraph>
      <Paragraph main summary>
          All of the projects in this portfolio
          was made fall 2022 during <a href="https://www.technigo.io/web-development-boot-camp" target="_blank" rel="noreferrer">Technigo Web Development Bootcamp</a>.
      </Paragraph>
      <Paragraph main>
        I am currently working as a frontend developer at <a href="https://fullystudios.se/" target="_blank" rel="noreferrer">Fully Studios</a>.
      </Paragraph>
    </SectionContainer>
  );
};

export default Summary;
