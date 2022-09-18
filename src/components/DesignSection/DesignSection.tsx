import styled from 'styled-components';
import DesignGrid from '../DesignGrid';
import Heading from '../Heading';
import Section from '../Section';

export interface IProps {
  delegated?: any;
}

// TODO: Use a JSON

const DesignSection: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Heading>Designs</Heading>
      <DesignGrid />
    </Wrapper>
  );
};

const Wrapper = styled(Section)``;

export default DesignSection;
