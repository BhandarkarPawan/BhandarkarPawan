import styled from 'styled-components';
import Logo from '../Logo';
import Navbar from '../Navbar';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Header: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Logo />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default Header;
