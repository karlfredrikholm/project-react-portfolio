import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: ${({ main }) => (main ? 'var(--main-font)' : 'var(--sub-font)')};
  line-height: var(--line-height);
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  transition: all .3s ease;
  padding-bottom: ${({ padd }) => (padd && '1rem')};

  ${({ grid }) => (grid
    ? { margin: '0', width: '95%' }
    : { margin: 'var(--margin)', width: 'var(--width)' })};

  & a {
    text-decoration: underline;
    ${({ thoughts }) => (thoughts && { marginTop: '0.5rem' })};
  }
  
  & a:hover {
    color: var(--main-color);
  }
`;

export default Paragraph;
