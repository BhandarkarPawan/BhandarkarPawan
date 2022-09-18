import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import NavLink from '../NavLink';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Navbar: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
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
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      justify-content: space-between;
      width: 50%;

      @media ${QUERY.phoneAndDown}{
        padding-top: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 80%
    }
  `}
`;

export default Navbar;
