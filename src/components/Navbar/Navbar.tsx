import styled from 'styled-components';
import NavLink from '../NavLink';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Navbar: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <NavLink>About</NavLink>
      <NavLink>Designs</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Contact</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
