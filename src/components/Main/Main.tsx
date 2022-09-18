import styled from 'styled-components';
import DesignSection from '../DesignSection';
import EducationSection from '../EducationSection';
import Hero from '../Hero';
import ProjectSection from '../ProjectSection';
import SkillSection from '../SkillSection';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Main: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Hero />
      <EducationSection />
      <SkillSection />
      <DesignSection />
      <ProjectSection />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default Main;
