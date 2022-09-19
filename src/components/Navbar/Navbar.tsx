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
  variant?: String;
}

const Navbar: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);
  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <NavLink refId="about" variant={props.variant}>
        About
      </NavLink>
      <NavLink refId="designs" variant={props.variant}>
        Designs
      </NavLink>
      <NavLink refId="projects" variant={props.variant}>
        Projects
      </NavLink>
      <NavLink refId="contact" variant={props.variant}>
        Contact
      </NavLink>
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 80%
    }
  `}
`;

export default Navbar;
