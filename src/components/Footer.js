import React from 'react';
import styled from 'styled-components';
import Paragraph from './styled/Paragraph.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <h4>Contact</h4>
      <Paragraph center>Fredrik Holm
        <a href="mailto:karlfredrikholm@gmail.com">karlfredrikholm@gmail.com</a>
        +46724035836
      </Paragraph>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background: rgb(255, 132, 24);
  background: radial-gradient(
    circle,
    rgba(255, 132, 24, 1) 0%,
    rgba(128, 136, 255, 1) 100%
  );
  color: white;
  padding-top: 3.2rem;
  width: 100%;
  height: 250px;

  & h4 {
    background-color: none;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 1.1rem auto 0.5rem;
    width: fit-content;
    text-transform: uppercase;
  } 

  & a {
    display: block;
    color: white;
    text-decoration: none;
  }
`;