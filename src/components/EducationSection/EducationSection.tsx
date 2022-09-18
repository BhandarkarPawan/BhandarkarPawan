import styled from 'styled-components';
import EducationList from '../EducationList';
import Heading from '../Heading';
import Section from '../Section';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const EducationSection: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Heading>Education</Heading>
      <EducationList />
    </Wrapper>
  );
};

const Wrapper = styled(Section)``;

export default EducationSection;
