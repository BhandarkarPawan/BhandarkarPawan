import styled from 'styled-components';
import Heading from '../Heading';
import ProjectGrid from '../ProjectGrid';
import Section from '../Section';

export interface IProps {
  delegated?: any;
}

// TODO: Use a JSON

const DesignSection: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Heading>Projects</Heading>
      <ProjectGrid />
    </Wrapper>
  );
};

const Wrapper = styled(Section)``;

export default DesignSection;
