import styled from 'styled-components';

export const ProjectsGrid = styled.div` 
  display: grid;
  grid-template-columns: ${(props) => (props.other ? '1fr' : '1fr 1fr')};
  gap: 2rem;
  margin: var(--margin);
  width: var(--width);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin: var(--margin);
  width: var(--width);

  & h5 {
    text-transform: uppercase;
    margin-bottom: .2rem;
  }

  & ul {
    font-family: var(--sub-font);
    line-height: var(--line-height);
    list-style-type: none;
  }

  @media (max-width: 650px) {
    grid-template-columns: ${({ skills }) => (skills && '1fr')};
    
    & ul {
      margin-bottom: 1.5rem;
    }

    & ul:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;
