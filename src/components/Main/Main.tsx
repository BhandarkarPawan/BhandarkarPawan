import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import DesignSection from '../DesignSection';
import EducationSection from '../EducationSection';
import HeroImage from '../HeroImage';
import Intro from '../Intro';
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
      <HeroImage />
      <Intro />
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
    padding: 60px var(--global-h-pad);
    grid-template-areas: 
      "heroimage intro"
      "education skills"
      "designs designs"
      "projects projects";
    flex-direction: column;
    gap: 64px;

    max-width: var(--max-width);
    width: min(100%, var(--max-width));
    margin: auto;


    @media ${QUERY.phoneAndDown}{
      grid-template-areas: 
      "heroimage"
      "intro"
      "education"
      "skills"
      "designs"
      "projects";

      padding-top: 30px;
      padding-bottom: 30px;

    }

  `}
`;

export default Main;
