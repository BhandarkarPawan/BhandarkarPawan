import styled from 'styled-components';
import Actions from '../Actions';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Intro: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Greeting>Hello 👋</Greeting>
      <About>
        I’m Pawan, a full stack developer with a special interest in UI/UX. I
        design and build beautiful applications using modern web technologies
        with a keen focus on accessibility on the web.
      </About>
      <Actions />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Greeting = styled.h1``;

const About = styled.h2``;

export default Intro;
