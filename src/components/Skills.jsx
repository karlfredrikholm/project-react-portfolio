import React from 'react';
import { SectionContainer } from './styled/Containers.styled';
import { SkillsGrid } from './styled/Grids.styled';

const Skills = () => {
  return (
    <SectionContainer bg less>
      <h4>Skills</h4>
      <SkillsGrid skills>
        <div>
          <h5>Tools</h5>
          <ul>
            <li>VS Code</li>
            <li>GitHub</li>
            <li>Adobe PS</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h5>Code</h5>
          <ul>
            <li>JavaScript ES6</li>
            <li>React.js</li>
            <li>CSS</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div>
          <h5>More</h5>
          <ul>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Styled Components</li>
            <li>Node.js</li>
          </ul>
        </div>
      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;