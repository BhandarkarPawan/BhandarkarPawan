import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import DesignSection from '../DesignSection';
import EducationSection from '../EducationSection';
import Hero from '../Hero';
import ProjectSection from '../ProjectSection';
import SkillSection from '../SkillSection';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Main: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Hero />
      <EducationSection />
      <SkillSection />
      <DesignSection />
      <ProjectSection />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: grid;
    padding: 60px 0px;
    grid-template-areas: 
      "hero hero"
      "education skills"
      "designs designs"
      "projects projects";
    flex-direction: column;
    gap: 64px;

    max-width: var(--max-width);
    width: min(100%, var(--max-width));
    margin: auto;
  `}
`;

export default Main;
