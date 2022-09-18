import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import HeroImage from '../HeroImage';
import Intro from '../Intro';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Hero: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <HeroImage />
      <Intro />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    align-items: center;
    grid-area: hero;
  `}
`;

export default Hero;
