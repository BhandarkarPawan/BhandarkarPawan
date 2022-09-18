import styled from 'styled-components';
import SKILLS from '../../skills.json';
import Heading from '../Heading';
import Section from '../Section';
import SkillsMasonry from '../SkillsMasonry';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const SkillsSection: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Heading>Skills</Heading>
      <SkillsMasonry skills={SKILLS} />
    </Wrapper>
  );
};

const Wrapper = styled(Section)``;

export default SkillsSection;
