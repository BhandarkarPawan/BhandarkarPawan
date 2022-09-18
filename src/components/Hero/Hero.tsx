import styled from 'styled-components';
import HeroImage from '../HeroImage';
import Intro from '../Intro';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Hero: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <HeroImage />
      <Intro />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
`;

export default Hero;
