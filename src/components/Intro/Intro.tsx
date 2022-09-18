import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import Actions from '../Actions';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Intro: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Greeting fixed={fixed}>Hello 👋</Greeting>
      <About fixed={fixed}>
        I’m <strong>Pawan</strong>, a full stack developer with a special
        interest in UI/UX. I design and build beautiful applications using
        modern web technologies with a keen focus on accessibility on the web.
      </About>
      <Actions />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    grid-area: intro;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  `}
`;

const Greeting = styled.h1`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      font-size: calc(1rem * 48/18);
      margin-bottom: 24px;


    @media ${QUERY.phoneAndDown}{
      font-size: calc(1rem * 36/18);
      }
  `}
`;

const About = styled.h2`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    font-size: calc(1rem * 32/18);
    line-height: calc(1rem * 36/18);
    margin-bottom: 40px;
    
    & strong{
      color: var(--color-primary);
      margin: auto;
    }

    @media ${QUERY.phoneAndDown}{
      font-size: calc(1rem * 24/18);
      line-height: calc(1rem * 32/18);
      }
  `}
`;

export default Intro;
